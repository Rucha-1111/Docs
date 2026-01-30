# Part 10: Production Deployment Guide and Best Practices

Successfully running production workloads on OpenShift requires careful planning, robust deployment processes, effective troubleshooting strategies, and operational discipline. This final guide provides a comprehensive framework for production deployments and ongoing operations.

---

## Pre-Production Checklist

### Infrastructure Readiness

**Cluster configuration:**

* ✓ Control plane nodes: Minimum 3 nodes for HA
* ✓ Worker nodes: Adequate capacity with room for growth
* ✓ Infrastructure nodes: Dedicated nodes for platform services
* ✓ Network configuration: Proper CIDR ranges, DNS, firewall rules
* ✓ Storage configuration: Storage classes configured and tested
* ✓ Load balancers: External load balancers for ingress traffic
* ✓ Certificate management: Valid SSL/TLS certificates configured

**Security configuration:**

* ✓ Authentication provider: LDAP/AD or enterprise SSO configured
* ✓ RBAC policies: Roles and permissions defined and assigned
* ✓ Security Context Constraints: Appropriate SCCs configured
* ✓ Network policies: Traffic restrictions implemented
* ✓ Image scanning: Vulnerability scanning enabled
* ✓ Secrets management: Secure secret storage configured
* ✓ Audit logging: Enabled and forwarding to SIEM

**Monitoring and logging:**

* ✓ Cluster monitoring: Prometheus stack operational
* ✓ Application monitoring: ServiceMonitors configured
* ✓ Alerting: AlertManager rules and routing configured
* ✓ Centralized logging: Log aggregation configured
* ✓ Log retention: Policies defined and implemented
* ✓ Dashboards: Key metrics dashboards created

**Backup and recovery:**

* ✓ Backup strategy: Defined and documented
* ✓ etcd backups: Automated and tested
* ✓ Application backups: PV snapshots or OADP configured
* ✓ Disaster recovery plan: Documented and tested
* ✓ RTO/RPO defined: Recovery objectives established

### Application Readiness

**Container images:**

* ✓ Security scanning: Images scanned and vulnerabilities addressed
* ✓ Image signing: Images signed for verification
* ✓ Base images: Minimal, regularly updated base images
* ✓ Registry access: Proper authentication configured
* ✓ Image tags: Semantic versioning, never use 'latest'

**Resource configuration:**

* ✓ Resource requests: Set based on actual usage patterns
* ✓ Resource limits: Defined with appropriate headroom
* ✓ QoS classes: Understanding Guaranteed vs Burstable
* ✓ Storage requirements: PVCs created and sized appropriately
* ✓ Network requirements: Services and routes configured

**Application configuration:**

* ✓ ConfigMaps: Non-sensitive configuration externalized
* ✓ Secrets: Sensitive data properly secured
* ✓ Environment variables: Properly configured
* ✓ Health checks: Readiness and liveness probes implemented
* ✓ Graceful shutdown: Proper signal handling implemented

**Scalability:**

* ✓ Horizontal scaling: Deployment configured with multiple replicas
* ✓ Autoscaling: HPA configured if appropriate
* ✓ Anti-affinity: Pods distributed across nodes
* ✓ Load testing: Application tested under load
* ✓ Resource consumption: Baseline metrics established

---

## Production Deployment Workflow

### Phase 1: Development Environment Deployment

**Purpose:** Initial development and testing

**Process:**

```bash
# Create development project
oc new-project myapp-dev

# Deploy application using S2I
oc new-app python~https://github.com/myorg/myapp.git \
  --name=myapp \
  --labels=app=myapp,env=dev

# Configure environment
oc create configmap app-config --from-file=config.properties
oc create secret generic app-secrets --from-literal=db-password=devpassword

# Update deployment to use config
oc set env deployment/myapp --from=configmap/app-config
oc set env deployment/myapp --from=secret/app-secrets

# Add storage if needed
oc set volume deployment/myapp \
  --add \
  --name=data \
  --type=persistentVolumeClaim \
  --claim-name=myapp-data \
  --mount-path=/data

# Expose service
oc expose service/myapp

# Get route URL
oc get route myapp -o jsonpath='{.spec.host}'
```

**Validation:**

* Application starts successfully
* Health checks passing
* Basic functionality verified
* Logs show no errors

### Phase 2: Staging Environment Deployment

**Purpose:** Pre-production validation and testing

**Process:**

```bash
# Create staging project
oc new-project myapp-staging

# Set resource quotas
oc create quota staging-quota \
  --hard=requests.cpu=4,requests.memory=8Gi,pods=20

# Deploy application (using tested image from dev)
oc new-app --docker-image=image-registry.openshift-image-registry.svc:5000/myapp-dev/myapp:v1.2.3 \
  --name=myapp \
  --labels=app=myapp,env=staging

# Scale for staging load
oc scale deployment/myapp --replicas=2

# Configure staging environment
oc create configmap app-config --from-file=staging-config.properties
oc create secret generic app-secrets --from-literal=db-password=${STAGING_PASSWORD}

# Apply configuration
oc set env deployment/myapp --from=configmap/app-config
oc set env deployment/myapp --from=secret/app-secrets

# Add persistent storage
oc create -f myapp-pvc.yaml
oc set volume deployment/myapp \
  --add \
  --name=data \
  --type=persistentVolumeClaim \
  --claim-name=myapp-data \
  --mount-path=/data

# Configure resource limits
oc set resources deployment/myapp \
  --requests=cpu=250m,memory=512Mi \
  --limits=cpu=500m,memory=1Gi

# Expose with TLS
oc create route edge myapp \
  --service=myapp \
  --hostname=myapp-staging.example.com \
  --cert=staging-cert.pem \
  --key=staging-key.pem
```

**Testing in staging:**

* Load testing and performance validation
* Integration testing with dependent services
* Security scanning and penetration testing
* User acceptance testing (UAT)
* Failure scenario testing
* Backup and restore testing

### Phase 3: Production Deployment

**Purpose:** Live production environment

**Pre-deployment steps:**

1. **Change management approval**: Follow organizational change process
2. **Communication**: Notify stakeholders of deployment window
3. **Backup verification**: Ensure recent backups exist
4. **Rollback plan**: Document rollback procedures
5. **Monitoring preparation**: Ensure alerts and dashboards ready

**Production deployment:**

```bash
# Create production project
oc new-project myapp-prod

# Set production quotas
oc create quota prod-quota \
  --hard=requests.cpu=16,requests.memory=32Gi,pods=50

# Deploy application with production image
oc new-app --docker-image=registry.example.com/myapp:v1.2.3 \
  --name=myapp \
  --labels=app=myapp,env=prod,version=v1.2.3

# Scale for production load
oc scale deployment/myapp --replicas=5

# Apply production configuration
oc create configmap app-config --from-file=prod-config.properties
oc create secret generic app-secrets \
  --from-literal=db-password=${PROD_PASSWORD} \
  --from-literal=api-key=${PROD_API_KEY}

oc set env deployment/myapp --from=configmap/app-config
oc set env deployment/myapp --from=secret/app-secrets

# Add persistent storage with backup
oc create -f myapp-prod-pvc.yaml
oc set volume deployment/myapp \
  --add \
  --name=data \
  --type=persistentVolumeClaim \
  --claim-name=myapp-data \
  --mount-path=/data

# Set production resource limits
oc set resources deployment/myapp \
  --requests=cpu=500m,memory=1Gi \
  --limits=cpu=1000m,memory=2Gi

# Configure autoscaling
oc autoscale deployment/myapp --min=5 --max=20 --cpu-percent=70

# Set pod anti-affinity for HA
oc patch deployment/myapp -p '
{
  "spec": {
    "template": {
      "spec": {
        "affinity": {
          "podAntiAffinity": {
            "requiredDuringSchedulingIgnoredDuringExecution": [
              {
                "labelSelector": {
                  "matchLabels": {
                    "app": "myapp"
                  }
                },
                "topologyKey": "kubernetes.io/hostname"
              }
            ]
          }
        }
      }
    }
  }
}'

# Create production route with TLS
oc create route edge myapp \
  --service=myapp \
  --hostname=myapp.example.com \
  --cert=prod-cert.pem \
  --key=prod-key.pem \
  --ca-cert=ca-chain.pem

# Configure health checks
oc set probe deployment/myapp \
  --readiness \
  --get-url=http://:8080/health/ready \
  --initial-delay-seconds=10 \
  --period-seconds=10 \
  --failure-threshold=3

oc set probe deployment/myapp \
  --liveness \
  --get-url=http://:8080/health/live \
  --initial-delay-seconds=30 \
  --period-seconds=30 \
  --failure-threshold=3
```

**Post-deployment verification:**

1. **Health checks**: All pods healthy and ready
2. **Monitoring**: Metrics flowing to Prometheus
3. **Logging**: Logs appearing in aggregation system
4. **Application testing**: Critical paths validated
5. **Performance**: Response times within SLA
6. **Traffic verification**: External access working correctly

---

## Deployment Strategies

### Rolling Deployment (Default)

**Characteristics:**

* Gradual replacement of old pods with new pods
* Zero downtime deployment
* Both versions running temporarily
* Automatic rollback on failure

**Configuration:**

```yaml
strategy:
  type: Rolling
  rollingUpdate:
    maxUnavailable: 25%
    maxSurge: 25%
```

**When to use:** Standard deployments where brief coexistence of versions is acceptable

### Blue-Green Deployment

**Characteristics:**

* Complete new environment (green) deployed alongside old (blue)
* Traffic switched instantly from blue to green
* Easy rollback by switching back
* Requires double resources temporarily

**Implementation:**

```bash
# Deploy green version
oc new-app myapp:v2 --name=myapp-green

# Test green version
oc expose service/myapp-green --name=myapp-green-test

# Switch traffic to green
oc patch route/myapp -p '{"spec":{"to":{"name":"myapp-green"}}}'

# Keep blue for quick rollback if needed
# Delete blue after validation period
```

**When to use:** Critical applications requiring instant rollback capability

### Canary Deployment

**Characteristics:**

* New version deployed to small subset of users
* Gradual traffic increase to new version
* Monitor for issues before full rollout
* Risk mitigation through phased approach

**Implementation:**

```bash
# Deploy canary version with 1 replica
oc new-app myapp:v2 --name=myapp-canary
oc scale deployment/myapp-canary --replicas=1

# Configure route to split traffic (90% stable, 10% canary)
oc set route-backends myapp myapp=90 myapp-canary=10

# Monitor canary performance
# Gradually increase canary traffic
oc set route-backends myapp myapp=70 myapp-canary=30
oc set route-backends myapp myapp=50 myapp-canary=50

# Eventually replace entirely
oc set route-backends myapp myapp-canary=100
```

**When to use:** High-risk deployments requiring gradual rollout and validation

---

## Troubleshooting Guide

### Pod Issues

**Pod won't start:**

```bash
# Check pod status
oc get pods

# Describe pod for events
oc describe pod myapp-xxx

# Common issues and solutions:
# - ImagePullBackOff: Check image name, registry credentials
# - CrashLoopBackOff: Check application logs for startup errors
# - Pending: Check resource availability, node selectors, taints
# - CreateContainerConfigError: Check configmaps and secrets exist
```

**Check pod logs:**

```bash
# Current logs
oc logs myapp-xxx

# Previous container logs
oc logs --previous myapp-xxx

# Follow logs
oc logs -f myapp-xxx

# Logs from specific container
oc logs myapp-xxx -c container-name
```

**Debug running container:**

```bash
# Execute commands in container
oc exec myapp-xxx -- ls -la /app

# Interactive shell
oc exec -it myapp-xxx -- /bin/bash

# Debug with ephemeral container
oc debug pod/myapp-xxx
```

### Networking Issues

**Service not accessible:**

```bash
# Check service
oc get service myapp
oc describe service myapp

# Verify endpoints exist
oc get endpoints myapp

# Test service connectivity from another pod
oc run test --rm -it --image=busybox -- wget -O- http://myapp:8080

# Check network policies
oc get networkpolicy
oc describe networkpolicy
```

**Route not working:**

```bash
# Check route
oc get route myapp
oc describe route myapp

# Verify DNS resolution
nslookup myapp.example.com

# Test route
curl -v https://myapp.example.com

# Check router logs
oc logs -n openshift-ingress -l app=router
```

### Resource Issues

**Out of resources:**

```bash
# Check node resources
oc describe nodes | grep -A 5 "Allocated resources"

# Check pod resource usage
oc adm top pods
oc adm top nodes

# Check quota usage
oc describe quota

# View resource requests and limits
oc describe deployment myapp | grep -A 10 "Limits"
```

### Storage Issues

**PVC not binding:**

```bash
# Check PVC status
oc get pvc

# Describe PVC for events
oc describe pvc myapp-data

# Check storage class
oc get storageclass

# Check PV availability
oc get pv

# Common issues:
# - No PV matching requirements
# - Storage class doesn't exist
# - Provisioner not working
```

### Application Performance Issues

**Slow response times:**

```bash
# Check pod metrics
oc adm top pods

# Check application logs for errors
oc logs deployment/myapp | grep ERROR

# Check database connections
# Check external service dependencies
# Review application profiling data

# Scale if needed
oc scale deployment/myapp --replicas=10
```

**Memory leaks:**

```bash
# Monitor memory usage over time
oc adm top pods --watch

# Check for OOMKilled containers
oc get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.containerStatuses[*].lastState.terminated.reason}{"\n"}{end}'

# Review application memory management
# Consider increasing limits if justified
# Fix application memory leaks
```

### Build Failures

**S2I build fails:**

```bash
# Check build status
oc get builds

# View build logs
oc logs -f bc/myapp

# Common issues:
# - Source repository access denied
# - Build dependencies unavailable
# - Insufficient build resources
# - Builder image incompatible

# Rebuild with debugging
oc start-build myapp --follow

# Cancel stuck build
oc cancel-build myapp-2
```

---

## Operational Best Practices

### Day 1: Deployment

**Initial deployment:**

* Follow deployment workflow systematically
* Verify each step before proceeding
* Monitor closely during and after deployment
* Keep rollback plan ready
* Document any deviations or issues

**Post-deployment:**

* Validate application functionality
* Check monitoring and alerting
* Verify backup jobs running
* Update documentation
* Communicate success to stakeholders

### Day 2: Operations

**Daily operations:**

* Monitor cluster and application health
* Review alerts and respond appropriately
* Check resource utilization trends
* Review logs for errors or anomalies
* Verify backup completion

**Weekly operations:**

* Review capacity trends
* Analyze performance metrics
* Update applications and base images
* Review security scan results
* Test disaster recovery procedures

**Monthly operations:**

* Cluster updates and patches
* Review and update quotas
* Audit user access and permissions
* Capacity planning based on growth
* Review and update runbooks

### Continuous Improvement

**Metrics-driven optimization:**

* Track deployment frequency
* Measure deployment success rate
* Monitor mean time to recovery (MTTR)
* Track resource utilization efficiency
* Measure application performance SLAs

**Automation expansion:**

* Automate repetitive tasks
* Implement GitOps for configurations
* Enhance CI/CD pipelines
* Expand monitoring coverage
* Improve alerting accuracy

**Knowledge sharing:**

* Document lessons learned
* Create runbooks for common issues
* Conduct post-mortem analysis
* Share best practices across teams
* Provide training and mentoring

---

## Production Readiness Checklist

### Application Level

* ☐ Health checks implemented (readiness and liveness)
* ☐ Graceful shutdown handling
* ☐ Resource requests and limits configured
* ☐ Multiple replicas for high availability
* ☐ Pod anti-affinity rules configured
* ☐ Horizontal autoscaling configured
* ☐ Persistent storage configured and tested
* ☐ Configuration externalized (ConfigMaps, Secrets)
* ☐ Logging structured and comprehensive
* ☐ Metrics exposed for monitoring
* ☐ Security context configured appropriately

### Platform Level

* ☐ Cluster monitoring operational
* ☐ Centralized logging configured
* ☐ Alerting rules configured and tested
* ☐ Backup strategy implemented and tested
* ☐ Disaster recovery plan documented
* ☐ Network policies implemented
* ☐ RBAC configured appropriately
* ☐ Resource quotas defined
* ☐ Certificate management automated
* ☐ Image scanning integrated
* ☐ Audit logging enabled

### Operational Level

* ☐ Runbooks created for common scenarios
* ☐ On-call rotation established
* ☐ Escalation procedures defined
* ☐ Monitoring dashboards created
* ☐ Performance baselines established
* ☐ Capacity planning completed
* ☐ Change management process followed
* ☐ Documentation complete and updated
* ☐ Training provided to operators
* ☐ Communication plan established

---

## Common Anti-Patterns to Avoid

### Deployment Anti-Patterns

**Running as root unnecessarily:**

* Use non-root user in containers
* Avoid privileged SCCs unless required
* Follow least privilege principle

**Using 'latest' tag:**

* Always use specific version tags
* Enables version tracking and rollback
* Prevents unexpected updates

**No health checks:**

* Always implement readiness and liveness probes
* Prevents traffic to unhealthy pods
* Enables automatic recovery

**Inadequate resource configuration:**

* Set appropriate requests and limits
* Prevents resource starvation
* Enables proper scheduling

### Operational Anti-Patterns

**Manual configuration changes:**

* Use declarative configurations
* Version control all changes
* Follow GitOps principles

**Ignoring monitoring data:**

* Set up alerts for critical metrics
* Review trends regularly
* Act on anomalies proactively

**Infrequent backups:**

* Automate backup processes
* Test restore procedures regularly
* Maintain multiple backup copies

**No disaster recovery testing:**

* Test recovery procedures regularly
* Update plans based on lessons learned
* Ensure team knows procedures

---

## Scaling Best Practices

### Horizontal Scaling

**Application scaling:**

```bash
# Manual scaling
oc scale deployment/myapp --replicas=10

# Autoscaling
oc autoscale deployment/myapp --min=3 --max=20 --cpu-percent=70

# Custom metrics autoscaling
# Using custom metrics from application
```

**When to scale horizontally:**

* CPU or memory utilization consistently high
* Response times degrading
* Request queue growing
* Anticipating traffic spike

### Vertical Scaling

**Increase pod resources:**

```bash
# Update resource limits
oc set resources deployment/myapp \
  --requests=cpu=1000m,memory=2Gi \
  --limits=cpu=2000m,memory=4Gi
```

**When to scale vertically:**

* Single-threaded workloads
* Memory-intensive operations
* Cannot horizontally scale application
* Requires more resources per instance

### Cluster Scaling

**Add worker nodes:**

```bash
# Scale machine set
oc scale machineset/worker --replicas=10

# Enable cluster autoscaler
# Configure per machine set
```

**When to scale cluster:**

* Pods pending due to insufficient resources
* Node resource utilization high
* Planning for growth
* Availability zone expansion

---

## Key Takeaways

* Production readiness requires comprehensive preparation across infrastructure, security, monitoring, and backup
* Follow structured deployment workflow: Development → Staging → Production
* Choose appropriate deployment strategy (Rolling, Blue-Green, Canary) based on risk tolerance
* Systematic troubleshooting follows the workflow: pods → networking → storage → application
* Day 2 operations require ongoing monitoring, maintenance, and continuous improvement
* Production readiness checklists ensure nothing is overlooked
* Avoid common anti-patterns in deployment and operations
* Scale appropriately based on metrics and workload characteristics
* Automation and documentation are critical for sustainable operations
* Regular testing of backup and disaster recovery procedures is essential

---

## Conclusion: Your OpenShift Journey

This 10-part series has covered the complete journey from container basics to production-ready OpenShift deployments:

1. **Container Fundamentals**: Understanding containers and their underlying technologies
2. **Container Tools**: Docker, Podman, Buildah, and container runtimes
3. **Kubernetes Introduction**: Container orchestration and declarative architecture
4. **OpenShift Basics**: Enterprise Kubernetes platform and deployment options
5. **Operators and Automation**: Managing machines, nodes, and cluster infrastructure
6. **Command-Line Tools**: kubectl and oc for efficient cluster management
7. **Application Deployment**: Multiple deployment methods and service exposure
8. **Access Control**: Authentication, RBAC, quotas, and security
9. **Advanced Features**: Storage, networking, monitoring, logging, and HA
10. **Production Operations**: Deployment workflows, troubleshooting, and best practices

You now have the knowledge foundation to effectively design, deploy, and operate containerized applications on OpenShift. Continue learning through hands-on practice, community engagement, and real-world experience.

**Additional resources:**

* Red Hat OpenShift documentation: docs.openshift.com
* Kubernetes documentation: kubernetes.io/docs
* OpenShift blog: blog.openshift.com
* Red Hat Developer: developers.redhat.com
* OpenShift YouTube channel
* Local user groups and meetups

Welcome to the container orchestration community! Keep building, learning, and sharing your knowledge with others on their journey.

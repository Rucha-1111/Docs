# Part 7: Deploying Applications on OpenShift

Deploying applications effectively requires understanding OpenShift's deployment methods, application lifecycle management, and service exposure mechanisms. This guide covers the complete application deployment workflow from source code to production.

---

## Application Deployment Overview

OpenShift provides multiple pathways for deploying applications, each suited to different scenarios and development workflows.

### Deployment Methods

**From Container Images:**

* Deploy pre-built images from registries
* Fast deployment for ready-made applications
* Suitable for production images

**From Source Code (Source-to-Image):**

* Build and deploy directly from Git repositories
* Automated build process
* Ideal for development workflows

**From Templates and Helm Charts:**

* Deploy complex applications with predefined configurations
* Reusable application definitions
* Simplified deployment of multi-component systems

**From Operators:**

* Deploy and manage applications using operators
* Automated lifecycle management
* Best for complex stateful applications

---

## Understanding Pods

### What is a Pod?

A **pod** in OpenShift is the **smallest deployable unit** that represents one or more tightly coupled containers sharing the same network namespace, storage volumes, and lifecycle.

**Pod characteristics:**

* **Atomic deployment unit**: Scheduled and managed as a single entity
* **Shared networking**: All containers share the same IP address and port space
* **Shared storage**: Containers can access the same volumes
* **Coordinated lifecycle**: Containers start and stop together
* **Co-location**: Always scheduled on the same node

### Multi-Container Pods

Pods can contain multiple containers that work together:

**Common patterns:**

* **Sidecar pattern**: Helper container supporting the main application
  * Log aggregation container
  * Monitoring agent
  * Proxy or adapter

* **Ambassador pattern**: Proxy container handling external communications
  * Database connection proxy
  * API gateway

* **Adapter pattern**: Container transforming main container output
  * Log format converter
  * Metrics translator

**Example use case:**

A web application pod with:

1. Main application container (Python Flask app)
2. Sidecar log shipping container (Fluentd)
3. Metrics exporter container (Prometheus exporter)

All three containers:

* Share the same network (localhost communication)
* Access shared volumes
* Are managed as one unit

### Pod Lifecycle

**Pod phases:**

* **Pending**: Pod created but containers not yet running (pulling images, scheduling)
* **Running**: At least one container is running
* **Succeeded**: All containers completed successfully
* **Failed**: At least one container failed
* **Unknown**: Pod status cannot be determined

**Container states:**

* **Waiting**: Container waiting to start (pulling image, checking dependencies)
* **Running**: Container executing normally
* **Terminated**: Container finished execution or crashed

---

## Deploying from Container Images

### What Does "Deploy Image" Mean?

**Deploy Image** in OpenShift refers to deploying an application directly from a container image stored in an internal or external container registry.

Instead of building the image from source code, OpenShift:

1. Pulls the specified image from a registry
2. Creates necessary deployment resources
3. Runs the image as containerized application
4. Manages the application lifecycle

### Deploying from Images via CLI

```bash
# Deploy from Docker Hub public image
oc new-app nginx:latest

# Deploy from Red Hat registry
oc new-app registry.redhat.io/rhel8/nginx-118

# Deploy with custom name
oc new-app --name=my-web nginx:latest

# Deploy from private registry
oc new-app --docker-image=private-registry.example.com/my-image:v1

# Deploy with environment variables
oc new-app nginx:latest -e NGINX_PORT=8080

# Deploy and expose immediately
oc new-app nginx:latest && oc expose svc/nginx
```

### Deploying from Images via Web Console

1. Navigate to Developer perspective
2. Click "Add" → "Container Image"
3. Select "Image name from external registry" or "Image stream tag from internal registry"
4. Enter image name or select from available streams
5. Configure application settings:
   * Application name
   * Component name
   * Resource limits
   * Environment variables
   * Labels
6. Choose whether to create route
7. Click "Create"

OpenShift automatically creates:

* **Deployment**: Manages pods and replicas
* **Service**: Internal networking endpoint
* **ImageStream**: Tracks image changes (optional)
* **Route**: External access (if selected)

---

## Source-to-Image (S2I) Deployment

### What is Source-to-Image?

**Source-to-Image (S2I)** is an OpenShift build mechanism that takes application source code, injects it into a builder image, and produces a runnable container image without requiring users to write a Dockerfile.

**S2I advantages:**

* **No Dockerfile needed**: Simplifies container image creation
* **Consistent builds**: Same builder image ensures reproducibility
* **Security**: Builder images maintained and patched by image providers
* **Speed**: Incremental builds reuse layers for faster subsequent builds
* **Developer focus**: Developers focus on code, not containerization

### How S2I Works

The S2I process:

1. **Source code provided**: From Git repository or local directory
2. **Builder image selected**: Contains language runtime and build tools
3. **Build process**:
   * Clone source code
   * Inject code into builder image
   * Execute build scripts (compile, package)
   * Create application layer
   * Produce final container image
4. **Image stored**: Pushed to internal registry
5. **Deployment**: Image deployed to cluster

### Builder Images

A **builder image** is a container image that contains the necessary runtime, dependencies, and build tools required to compile and package application source code into a runnable image.

**Common builder images:**

* **Python**: python:3.9, python:3.11
* **Node.js**: nodejs:16, nodejs:18
* **Java**: openjdk-11, openjdk-17
* **Ruby**: ruby:3.0, ruby:3.1
* **Go**: golang:1.19, golang:1.20
* **PHP**: php:8.0, php:8.1
* **.NET Core**: dotnet:6.0, dotnet:7.0

**Builder image contents:**

* Language runtime (Python interpreter, Node.js, JVM)
* Build tools (pip, npm, Maven, Gradle)
* Common dependencies and libraries
* S2I scripts for build automation
* Security patches and updates

### Deploying with S2I via CLI

```bash
# Deploy from Git repository (auto-detect language)
oc new-app https://github.com/user/python-app.git

# Specify builder image explicitly
oc new-app python:3.9~https://github.com/user/python-app.git

# Deploy from specific branch
oc new-app https://github.com/user/python-app.git#develop

# Deploy from subdirectory
oc new-app https://github.com/user/monorepo.git --context-dir=apps/backend

# Set environment variables
oc new-app python~https://github.com/user/app.git -e DATABASE_URL=postgresql://...

# Specify build environment variables
oc new-app python~https://github.com/user/app.git --build-env PYTHON_VERSION=3.9

# Create application with custom name
oc new-app --name=my-python-app python~https://github.com/user/app.git
```

### Deploying with S2I via Web Console

1. Navigate to Developer perspective
2. Click "Add" → "From Git"
3. Enter Git repository URL
4. OpenShift auto-detects language and suggests builder image
5. Configure build settings:
   * Select builder image version
   * Specify Git reference (branch/tag)
   * Set context directory if needed
   * Configure build environment variables
6. Configure deployment settings:
   * Application name
   * Resource limits
   * Deployment environment variables
   * Scaling options
7. Choose to create route for external access
8. Click "Create"

OpenShift automatically:

* Creates BuildConfig for building image
* Creates ImageStream for storing built images
* Creates Deployment for running application
* Creates Service for internal networking
* Creates Route for external access (if selected)

### Managing Builds

```bash
# View build configurations
oc get buildconfig

# View builds
oc get builds

# Start new build
oc start-build my-app

# Start build from local directory
oc start-build my-app --from-dir=.

# Follow build logs
oc logs -f bc/my-app

# Cancel running build
oc cancel-build my-app-2

# Delete old builds
oc delete build my-app-1 my-app-2

# Trigger rebuild on git push
oc set triggers bc/my-app --from-github
```

---

## Managing Deployments

### Scaling Applications

**Horizontal scaling** adjusts the number of pod replicas running your application.

**Scaling via CLI:**

```bash
# Scale deployment to 3 replicas
oc scale deployment/my-app --replicas=3

# Scale to zero (pause application)
oc scale deployment/my-app --replicas=0

# Check current replicas
oc get deployment my-app
```

**Scaling via Web Console:**

1. Navigate to Topology view
2. Click on application
3. In details panel, find "Pod" section
4. Use up/down arrows to adjust replica count
5. Changes apply immediately

**Autoscaling:**

```bash
# Create horizontal pod autoscaler
oc autoscale deployment/my-app --min=2 --max=10 --cpu-percent=80

# View autoscaler
oc get hpa

# Delete autoscaler
oc delete hpa my-app
```

### Rolling Updates

OpenShift performs rolling updates by default, gradually replacing old pods with new ones to maintain availability.

**Update strategies:**

* **Rolling (default)**: Gradually replace pods, zero downtime
* **Recreate**: Stop all pods, then start new ones, brief downtime

**Triggering updates:**

```bash
# Update container image
oc set image deployment/my-app container-name=new-image:v2

# Update environment variable
oc set env deployment/my-app DATABASE_URL=new-connection-string

# Update resource limits
oc set resources deployment/my-app --limits=cpu=500m,memory=512Mi
```

**Monitoring rollouts:**

```bash
# Watch rollout status
oc rollout status deployment/my-app

# View rollout history
oc rollout history deployment/my-app

# View specific revision
oc rollout history deployment/my-app --revision=2
```

**Rollback deployments:**

```bash
# Rollback to previous version
oc rollout undo deployment/my-app

# Rollback to specific revision
oc rollout undo deployment/my-app --to-revision=3

# Pause rollout
oc rollout pause deployment/my-app

# Resume rollout
oc rollout resume deployment/my-app
```

---

## Exposing Applications with Services and Routes

### Services: Internal Networking

Services provide stable internal endpoints for pods.

**Service types:**

* **ClusterIP**: Internal-only access (default)
* **NodePort**: Exposes service on each node's IP at a static port
* **LoadBalancer**: External load balancer (cloud environments)

**Creating services:**

```bash
# Expose deployment as service
oc expose deployment/my-app --port=8080 --target-port=8080

# Create service with custom name
oc expose deployment/my-app --port=8080 --name=my-service

# View services
oc get services

# Get service details
oc describe service my-app
```

### Routes: External Access

### What is a Route?

A **route** in OpenShift is a platform-specific resource that exposes a service externally by mapping a public hostname to an internal service, enabling HTTP and HTTPS access to applications running inside the cluster.

**Route capabilities:**

* **External access**: Make services accessible from outside the cluster
* **Hostname mapping**: Assign friendly URLs to services
* **TLS termination**: Handle HTTPS encryption at the router
* **Path-based routing**: Route different paths to different services
* **Load balancing**: Distribute traffic across service pods

### TLS/SSL for Routes

### What is TLS?

**TLS (Transport Layer Security)** is a cryptographic protocol that provides secure communication over a network by encrypting data, ensuring integrity, and authenticating endpoints.

In OpenShift, TLS is commonly used in routes to secure external access to applications using HTTPS.

**TLS termination types:**

* **Edge**: TLS terminates at the router, internal traffic is HTTP
* **Passthrough**: TLS traffic passes through router to pod, pod handles decryption
* **Re-encrypt**: TLS terminates at router, then re-encrypts for internal traffic

### Creating Routes

**Expose service via CLI:**

```bash
# Create simple HTTP route
oc expose service/my-app

# Create route with custom hostname
oc expose service/my-app --hostname=myapp.example.com

# Create secure route with edge TLS termination
oc create route edge my-app --service=my-app --hostname=myapp.example.com

# Create passthrough route
oc create route passthrough my-app --service=my-app --hostname=myapp.example.com

# Create route with path
oc expose service/my-app --path=/api
```

**View routes:**

```bash
# List routes
oc get routes

# Get route details
oc describe route my-app

# Get route URL
oc get route my-app -o jsonpath='{.spec.host}'

# Test route
curl $(oc get route my-app -o jsonpath='{.spec.host}')
```

**Creating routes via Web Console:**

1. Navigate to Networking → Routes
2. Click "Create Route"
3. Configure route:
   * Name
   * Hostname (optional, auto-generated if blank)
   * Path (optional)
   * Service to route to
   * Target port
   * Security settings (TLS termination type, certificates)
4. Click "Create"

---

## Application Lifecycle Management

### Topology View

The **Topology view** in OpenShift Web Console provides a visual representation of applications, services, pods, and their relationships.

**Topology features:**

* **Visual overview**: See all application components at a glance
* **Relationship mapping**: Understand connections between services
* **Health status**: Color-coded indicators for pod health
* **Quick actions**: Scale, view logs, edit from context menu
* **Traffic flow**: Visualize service communication

**Using Topology:**

1. Navigate to Developer perspective
2. Select project from dropdown
3. View visual representation of deployments
4. Click components for details and actions
5. Use right-click menu for quick operations

### Project Deployment Steps

**Complete deployment workflow:**

1. **Create project/namespace:**

   ```bash
   oc new-project my-application
   ```

2. **Deploy application:**

   ```bash
   # From Git (S2I)
   oc new-app python~https://github.com/user/app.git

   # From image
   oc new-app nginx:latest
   ```

3. **Monitor deployment:**

   ```bash
   oc get pods -w
   oc logs -f deployment/my-app
   ```

4. **Expose service:**

   ```bash
   oc expose service/my-app
   ```

5. **Verify application:**

   ```bash
   oc get routes
   curl $(oc get route my-app -o jsonpath='{.spec.host}')
   ```

6. **Scale if needed:**

   ```bash
   oc scale deployment/my-app --replicas=3
   ```

7. **Configure environment:**

   ```bash
   oc set env deployment/my-app DATABASE_URL=...
   ```

8. **Setup monitoring and alerts** (covered in later sections)

---

## Helm: Kubernetes Package Manager

### What is Helm?

The **Helm command** is used to manage Kubernetes and OpenShift applications through **Helm charts**, which are packaged collections of YAML manifests defining resources such as Deployments, Services, and ConfigMaps.

**Helm benefits:**

* **Versioned deployments**: Track application versions
* **Reusable templates**: Define once, deploy many times
* **Configuration management**: Separate configuration from manifests
* **Simplified upgrades**: Update applications with single command
* **Rollback capability**: Revert to previous versions easily

### Helm Concepts

**Chart**: Package of pre-configured Kubernetes resources

**Release**: Instance of a chart running in a cluster

**Repository**: Collection of charts available for installation

### Using Helm with OpenShift

```bash
# Add Helm repository
helm repo add bitnami https://charts.bitnami.com/bitnami

# Update repositories
helm repo update

# Search for charts
helm search repo postgresql

# Install chart
helm install my-database bitnami/postgresql

# Install with custom values
helm install my-database bitnami/postgresql --set auth.password=mypassword

# Install with values file
helm install my-database bitnami/postgresql -f values.yaml

# List installed releases
helm list

# Upgrade release
helm upgrade my-database bitnami/postgresql

# Rollback release
helm rollback my-database 1

# Uninstall release
helm uninstall my-database

# View chart details
helm show chart bitnami/postgresql
helm show values bitnami/postgresql
```

---

## Configuration Management

### Environment Variables

```bash
# Set environment variable
oc set env deployment/my-app DATABASE_URL=postgresql://...

# Set multiple variables
oc set env deployment/my-app VAR1=value1 VAR2=value2

# View environment variables
oc set env deployment/my-app --list

# Remove environment variable
oc set env deployment/my-app VAR1-
```

### ConfigMaps

```bash
# Create ConfigMap from literals
oc create configmap my-config --from-literal=key1=value1 --from-literal=key2=value2

# Create ConfigMap from file
oc create configmap my-config --from-file=config.properties

# Use ConfigMap in deployment
oc set env deployment/my-app --from=configmap/my-config

# Mount ConfigMap as volume
oc set volume deployment/my-app --add --name=config-vol --mount-path=/etc/config --configmap-name=my-config
```

### Secrets

```bash
# Create secret from literals
oc create secret generic my-secret --from-literal=password=supersecret

# Create secret from file
oc create secret generic my-secret --from-file=credentials.json

# Use secret in deployment
oc set env deployment/my-app --from=secret/my-secret

# Mount secret as volume
oc set volume deployment/my-app --add --name=secret-vol --mount-path=/etc/secrets --secret-name=my-secret
```

---

## Key Takeaways

* Pods are the smallest deployment unit, containing one or more tightly coupled containers
* OpenShift supports multiple deployment methods: container images, S2I, templates, Helm, and operators
* Deploy Image creates applications directly from pre-built container images
* Source-to-Image (S2I) builds container images from source code without Dockerfiles
* Builder images contain runtimes and tools needed to build applications
* Applications can be scaled horizontally by adjusting replica counts
* Rolling updates provide zero-downtime deployments with automatic rollback capability
* Routes expose services externally with TLS/SSL support for secure HTTPS access
* TLS termination can occur at edge, passthrough, or re-encrypt modes
* Topology view provides visual application management and monitoring
* Helm simplifies deployment of complex applications through packaged charts
* Configuration management uses environment variables, ConfigMaps, and Secrets

---

**Next in this series**: Part 8 will cover access control in OpenShift, exploring authentication providers, role-based access control (RBAC), security context constraints, and resource quotas.

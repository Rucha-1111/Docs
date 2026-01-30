# Part 8: Controlling Access to OpenShift

Security and access control are fundamental to multi-tenant OpenShift environments. This guide explores authentication mechanisms, role-based access control (RBAC), resource quotas, and project management to ensure secure and fair resource usage across teams.

---

## Authentication in OpenShift

Authentication verifies user identity before granting cluster access. OpenShift supports multiple authentication providers to integrate with existing enterprise identity systems.

### Identity Providers

OpenShift can authenticate users through various identity provider configurations:

* **LDAP/Active Directory**: Enterprise directory services
* **HTPasswd**: File-based authentication (development/testing)
* **OAuth providers**: GitHub, GitLab, Google
* **OpenID Connect**: Standards-based authentication
* **Request Header**: Proxy-based authentication
* **Keystone**: OpenStack identity service

Multiple identity providers can be configured simultaneously, allowing different authentication methods for different user groups.

---

## LDAP Identity Provider

### What is LDAP Identity Provider?

An **LDAP Identity Provider** in OpenShift is an external authentication mechanism that allows users to log in to the cluster using credentials stored in an LDAP directory service such as Active Directory.

**How it works:**

1. User attempts to log in to OpenShift
2. OpenShift forwards credentials to LDAP server
3. LDAP server validates credentials against directory
4. Upon successful authentication, LDAP returns user information
5. OpenShift creates or updates user account in cluster
6. OpenShift maps LDAP groups to OpenShift roles (optional)
7. User gains access based on assigned permissions

### Benefits of LDAP Integration

**Centralized user management:**

* Single source of truth for user accounts
* Consistent credentials across systems
* Simplified user lifecycle management
* No need to duplicate user accounts

**Enterprise integration:**

* Leverage existing Active Directory infrastructure
* Integrate with corporate security policies
* Compliance with authentication requirements
* Single sign-on (SSO) capabilities

**Group-based access control:**

* Map LDAP groups to OpenShift roles
* Automatic permission assignment
* Simplified permission management
* Dynamic access based on directory membership

### LDAP Configuration

LDAP identity providers require configuration specifying:

* **LDAP server URL**: Connection endpoint
* **Bind credentials**: Service account for LDAP queries
* **User search base**: Where to find user accounts
* **Attribute mappings**: Map LDAP attributes to OpenShift user properties
* **Group search**: Optional group membership queries

Example LDAP configuration elements:

```yaml
apiVersion: config.openshift.io/v1
kind: OAuth
metadata:
  name: cluster
spec:
  identityProviders:
  - name: ldap_provider
    type: LDAP
    ldap:
      url: ldaps://ldap.example.com:636
      bindDN: cn=service,ou=users,dc=example,dc=com
      bindPassword:
        name: ldap-secret
      attributes:
        id: ['dn']
        email: ['mail']
        name: ['cn']
        preferredUsername: ['uid']
```

---

## Role-Based Access Control (RBAC)

OpenShift uses Kubernetes RBAC extended with additional capabilities for fine-grained access control.

### RBAC Concepts

**User**: Individual or service account accessing the cluster

**Role**: Set of permissions (rules) defining what actions can be performed

**RoleBinding**: Grants permissions to users by binding them to roles

**ClusterRole**: Cluster-wide role applicable across all projects

**ClusterRoleBinding**: Grants cluster-wide permissions to users

### Built-in Roles

OpenShift provides several predefined roles:

**Cluster-level roles:**

* **cluster-admin**: Full cluster control, all operations on all resources
* **cluster-status**: Read-only access to cluster status
* **self-provisioner**: Can create new projects

**Project-level roles:**

* **admin**: Project administrator, full control within project
* **edit**: Can modify project resources (deployments, services, etc.)
* **view**: Read-only access to project resources
* **basic-user**: Minimal permissions for authenticated users

### Granting Permissions

**Project-level permissions:**

```bash
# Add admin role to user in project
oc adm policy add-role-to-user admin user1 -n my-project

# Add edit role to user
oc adm policy add-role-to-user edit user2 -n my-project

# Add view role to user
oc adm policy add-role-to-user view user3 -n my-project

# Add role to group
oc adm policy add-role-to-group edit developers -n my-project

# Remove role from user
oc adm policy remove-role-from-user edit user2 -n my-project
```

**Cluster-level permissions:**

```bash
# Add cluster-admin role to user
oc adm policy add-cluster-role-to-user cluster-admin admin-user

# Add cluster role to user for specific use
oc adm policy add-cluster-role-to-user cluster-reader monitor-user

# Remove cluster role from user
oc adm policy remove-cluster-role-from-user cluster-admin former-admin
```

### Service Accounts

Service accounts provide identity for processes running in pods.

**Creating and using service accounts:**

```bash
# Create service account
oc create serviceaccount my-sa

# Grant permissions to service account
oc adm policy add-role-to-user edit system:serviceaccount:my-project:my-sa

# Use service account in deployment
oc set serviceaccount deployment/my-app my-sa

# Get service account token
oc sa get-token my-sa
```

### Viewing Permissions

```bash
# View role bindings in project
oc get rolebindings

# View cluster role bindings
oc get clusterrolebindings

# Describe specific role binding
oc describe rolebinding admin

# Check if user can perform action
oc auth can-i create pods
oc auth can-i delete projects --as=user1

# View user's permissions
oc policy who-can delete pods
```

---

## Security Context Constraints (SCCs)

Security Context Constraints control what actions pods can perform and what resources they can access, going beyond standard Kubernetes Pod Security Standards.

### Built-in SCCs

OpenShift includes predefined SCCs:

* **restricted**: Default, most restrictive
* **restricted-v2**: Updated restricted policy (OpenShift 4.11+)
* **nonroot**: Can run as any non-root user
* **anyuid**: Can run as any user ID
* **hostaccess**: Can access host resources
* **hostmount-anyuid**: Can mount host volumes and run as any UID
* **hostnetwork**: Can use host networking
* **privileged**: Unrestricted access (highest privileges)

### Granting SCC Access

```bash
# List available SCCs
oc get scc

# View SCC details
oc describe scc restricted-v2

# Add SCC to service account
oc adm policy add-scc-to-user anyuid -z my-serviceaccount

# Add SCC to user
oc adm policy add-scc-to-user anyuid user1

# Remove SCC from service account
oc adm policy remove-scc-from-user anyuid -z my-serviceaccount

# Check which SCC will be used
oc get pod my-pod -o yaml | grep scc
```

### Common SCC Use Cases

**Running as root:**

Applications requiring root privileges need `anyuid` or higher SCC.

**Accessing host resources:**

Applications needing host filesystem or networking require appropriate SCCs.

**Legacy applications:**

Applications not designed for restricted environments may need elevated SCCs.

---

## Project Management

### Projects vs Namespaces

In OpenShift, **projects** extend Kubernetes namespaces with additional features:

* **Namespace isolation**: Separate resources between projects
* **RBAC integration**: Built-in role bindings
* **Resource quotas**: Automatic quota assignment
* **Network policies**: Project-level network isolation
* **Annotations and labels**: Additional metadata

### Project Lifecycle

**Creating projects:**

```bash
# Create new project
oc new-project my-application

# Create with display name and description
oc new-project my-app --display-name="My Application" --description="Production application"

# Create project with specific node selector
oc adm new-project my-app --node-selector='env=prod'
```

**Managing projects:**

```bash
# List projects
oc projects

# Switch to project
oc project my-project

# Get current project
oc project

# View project details
oc describe project my-project

# Delete project (deletes all resources)
oc delete project my-project
```

### Default Project Resources

### What Resources Are Automatically Granted?

When a user creates a project in OpenShift, default resources are automatically applied:

**Namespace**: Kubernetes namespace for resource isolation

**Service Accounts**: Default service accounts for pod execution:

* `default`: Used by pods without specified service account
* `builder`: Used by build pods
* `deployer`: Used by deployment pods

**Role Bindings**: Automatic permission assignments:

* Project creator gets `admin` role
* Service accounts get appropriate permissions

**Network Policies**: Default network isolation (if configured)

**Resource Quotas**: Cluster-configured default quotas (if applicable)

**Limit Ranges**: Default resource limits for pods and containers (if configured)

These defaults ensure projects are immediately usable and secured according to cluster policies.

---

## Resource Quotas

### What are Quotas?

**Quotas** in an OpenShift project are limits imposed on resource consumption to control how much CPU, memory, storage, pods, or other objects a project can use.

**Purpose of quotas:**

* **Fair resource sharing**: Prevent single project from consuming excessive resources
* **Cluster stability**: Ensure enough resources for all projects
* **Cost management**: Control infrastructure costs
* **Multi-tenancy**: Enable multiple teams to share cluster safely
* **Capacity planning**: Predictable resource allocation

### Types of Resource Quotas

**Compute resources:**

* **CPU**: Total CPU cores available to project
* **Memory**: Total RAM available to project
* **Ephemeral storage**: Temporary storage for pods

**Storage resources:**

* **Persistent volume claims**: Number of PVCs allowed
* **Storage capacity**: Total storage across all PVCs
* **Storage by class**: Limits per storage class

**Object counts:**

* **Pods**: Maximum number of pods
* **Services**: Maximum number of services
* **Routes**: Maximum number of routes
* **Secrets**: Maximum number of secrets
* **ConfigMaps**: Maximum number of ConfigMaps
* **Persistent Volume Claims**: Maximum number of PVCs

### Creating and Managing Quotas

### How Are Quotas Decided and By Whom?

**Quotas are typically decided by:**

* **Cluster administrators**: Overall cluster resource management
* **Platform teams**: Infrastructure capacity planning
* **Management**: Business and financial considerations

**Decision factors:**

* **Available cluster capacity**: Total resources in cluster
* **Organizational policies**: Company resource allocation rules
* **Workload requirements**: Anticipated application needs
* **Cost considerations**: Budget constraints
* **Fair usage goals**: Equitable resource distribution

**Quota enforcement:**

Quotas are enforced using:

* **ResourceQuota objects**: Define quota limits
* **LimitRange objects**: Default and maximum resource limits
* **Admission controllers**: Validate resource requests against quotas

**Creating quotas:**

```bash
# Create basic quota
oc create quota my-quota \
  --hard=pods=10,services=5 \
  -n my-project

# Create compute quota
oc create quota compute-quota \
  --hard=requests.cpu=4,requests.memory=8Gi,limits.cpu=8,limits.memory=16Gi \
  -n my-project

# Create storage quota
oc create quota storage-quota \
  --hard=persistentvolumeclaims=5,requests.storage=100Gi \
  -n my-project

# View quotas
oc get quota -n my-project

# Describe quota (shows usage)
oc describe quota my-quota -n my-project
```

**Quota YAML example:**

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: project-quota
  namespace: my-project
spec:
  hard:
    # Compute resources
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi

    # Object counts
    pods: "20"
    services: "10"
    secrets: "50"
    configmaps: "30"
    persistentvolumeclaims: "10"

    # Storage
    requests.storage: "100Gi"
```

**Updating quotas:**

```bash
# Edit quota
oc edit quota my-quota -n my-project

# Delete quota
oc delete quota my-quota -n my-project
```

### Limit Ranges

LimitRanges set default and maximum limits for individual containers and pods:

```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: resource-limits
  namespace: my-project
spec:
  limits:
  - type: Pod
    max:
      cpu: "2"
      memory: 4Gi
    min:
      cpu: 100m
      memory: 128Mi
  - type: Container
    default:
      cpu: 500m
      memory: 512Mi
    defaultRequest:
      cpu: 250m
      memory: 256Mi
    max:
      cpu: "1"
      memory: 2Gi
    min:
      cpu: 50m
      memory: 64Mi
```

**Creating LimitRange:**

```bash
# Create from file
oc create -f limitrange.yaml

# View limit ranges
oc get limitrange -n my-project

# Describe limit range
oc describe limitrange resource-limits -n my-project
```

---

## Cluster Administrator Role

### What is a Cluster Administrator?

A **cluster administrator** is a user with elevated privileges responsible for managing and maintaining the OpenShift cluster.

**Responsibilities:**

* **User access management**: Control who can access cluster
* **Resource quotas**: Set and enforce resource limits
* **Node management**: Add, remove, and maintain cluster nodes
* **Cluster upgrades**: Plan and execute platform upgrades
* **Security policies**: Define and enforce security rules
* **Monitoring**: Oversee cluster health and performance
* **Backup and disaster recovery**: Ensure data protection
* **Troubleshooting**: Resolve cluster-wide issues

**Capabilities:**

* **Full cluster access**: All operations on all resources
* **Cross-project operations**: Manage all projects
* **Infrastructure control**: Modify cluster configuration
* **Operator management**: Install and configure operators
* **Policy enforcement**: Apply cluster-wide policies

**Best practices:**

* **Limit cluster-admin access**: Grant sparingly
* **Use project-specific roles**: Prefer scoped permissions
* **Audit administrator actions**: Track privileged operations
* **Separate duties**: Different admins for different areas
* **Use service accounts**: Automate with service accounts instead of user accounts

---

## YAML Configuration Files

### What is YAML?

**YAML (YAML Ain't Markup Language)** is a human-readable data serialization format commonly used in Kubernetes and OpenShift to define configuration files and resource manifests.

**YAML characteristics:**

* **Human-readable**: Easy to read and write
* **Indentation-based**: Uses spaces (not tabs) for structure
* **Declarative**: Describes desired state
* **Key-value pairs**: Simple data representation
* **Support for complex types**: Lists, nested objects, multi-line strings

**YAML structure:**

```yaml
# Comments start with #
apiVersion: v1  # Key-value pair
kind: Pod       # Another key-value pair
metadata:       # Nested object
  name: my-pod
  labels:       # Nested object within object
    app: web
    tier: frontend
spec:           # Another nested object
  containers:   # List of objects
  - name: nginx # First list item (object)
    image: nginx:latest
    ports:      # List within object
    - containerPort: 80
```

**Common YAML patterns in OpenShift:**

* **Two-space indentation**: Standard formatting
* **Lists with dashes**: `- item` for list elements
* **Multi-line strings**: Using `|` or `>` for long text
* **References**: `&anchor` and `*alias` for reusable values

**Working with YAML:**

```bash
# Apply YAML file
oc apply -f resource.yaml

# Create from YAML
oc create -f resource.yaml

# Get resource as YAML
oc get pod my-pod -o yaml

# Edit resource in YAML
oc edit pod my-pod

# Validate YAML without applying
oc apply -f resource.yaml --dry-run=client

# Diff changes
oc diff -f resource.yaml
```

---

## Access Control Best Practices

### Principle of Least Privilege

* Grant minimum permissions needed for tasks
* Use project-scoped roles over cluster roles when possible
* Regularly review and revoke unnecessary permissions

### Role Assignment Strategy

* **Developers**: `edit` role in development projects
* **Operations**: `view` role for monitoring, `edit` for deployments
* **Project leads**: `admin` role in their projects
* **Cluster admins**: Reserved for platform team

### Service Account Security

* Use dedicated service accounts for applications
* Grant minimal required permissions
* Avoid using default service account for applications
* Rotate service account tokens regularly

### Quota Management

* Set quotas based on expected usage plus buffer
* Monitor quota usage regularly
* Adjust quotas based on actual consumption
* Document quota allocation decisions

### Audit and Compliance

* Enable audit logging for security events
* Review user access periodically
* Track permission changes
* Maintain documentation of access policies

---

## Key Takeaways

* Authentication providers integrate OpenShift with enterprise identity systems
* LDAP identity providers enable centralized user management through directory services
* RBAC provides fine-grained access control through roles and bindings
* Security Context Constraints control pod privileges and capabilities
* Projects extend namespaces with RBAC, quotas, and isolation
* Resource quotas ensure fair resource distribution and cluster stability
* Quotas are decided by administrators based on capacity and organizational policies
* LimitRanges set default and maximum resource limits for containers
* Cluster administrators manage overall platform health, security, and operations
* YAML files provide declarative resource definitions for version control and automation
* Following security best practices ensures safe multi-tenant cluster operation

---

**Next in this series**: Part 9 will explore advanced OpenShift features including persistent storage, networking, monitoring, and logging to enable production-ready deployments.

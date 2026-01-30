# Part 6: Command Line Tools for OpenShift

Command-line interfaces provide powerful, scriptable access to OpenShift and Kubernetes clusters. This guide explores kubectl and oc, explaining their relationship and demonstrating how to effectively manage clusters from the terminal.

---

## Introduction to Command Line Management

While web consoles provide user-friendly interfaces, command-line tools offer advantages for cluster management:

* **Automation**: Script repetitive tasks and integrate with CI/CD pipelines
* **Precision**: Exact control over resources and configurations
* **Speed**: Faster for experienced users than clicking through interfaces
* **Remote access**: Manage clusters from any terminal
* **Portability**: Scripts work across different environments
* **Version control**: Store commands and configurations in git repositories
* **Troubleshooting**: Direct access to logs, events, and resource details

Professional Kubernetes and OpenShift administrators rely heavily on CLI tools for day-to-day operations.

---

## kubectl: The Kubernetes CLI

### What is kubectl?

**kubectl** is the command-line tool used to interact with Kubernetes clusters, allowing users and administrators to deploy applications, inspect and manage cluster resources, view logs, execute commands inside pods, and control cluster behavior.

kubectl communicates directly with the Kubernetes API server using declarative or imperative commands, providing complete control over cluster resources.

### Core kubectl Capabilities

**Resource management:**

* Create, read, update, and delete Kubernetes resources
* Apply configuration files (YAML/JSON)
* Scale deployments and statefulsets
* Rollout and rollback application versions
* Patch resources with specific changes

**Cluster inspection:**

* List resources across namespaces
* Describe resources in detail
* View resource status and conditions
* Get resource specifications
* Monitor resource events

**Application debugging:**

* View container logs
* Execute commands inside running containers
* Port-forward to access services locally
* Copy files to/from containers
* Attach to running containers

**Configuration management:**

* Manage kubeconfig contexts
* Switch between clusters
* Set default namespaces
* Configure authentication

### kubectl Command Structure

kubectl follows a consistent command structure:

```bash
kubectl [command] [resource_type] [resource_name] [flags]
```

**Common commands:**

* `get`: List resources
* `describe`: Show detailed resource information
* `create`: Create resources from files or arguments
* `apply`: Apply configurations from files
* `delete`: Remove resources
* `edit`: Edit resources in default editor
* `logs`: View container logs
* `exec`: Execute commands in containers
* `scale`: Change replica counts
* `rollout`: Manage rollouts and rollbacks

**Common resource types:**

* `pods`, `pod`, `po`: Pods
* `deployments`, `deployment`, `deploy`: Deployments
* `services`, `service`, `svc`: Services
* `configmaps`, `configmap`, `cm`: ConfigMaps
* `secrets`, `secret`: Secrets
* `nodes`, `node`, `no`: Nodes
* `namespaces`, `namespace`, `ns`: Namespaces

**Common flags:**

* `-n, --namespace`: Specify namespace
* `-o, --output`: Output format (json, yaml, wide, etc.)
* `--all-namespaces`: Operate across all namespaces
* `-l, --selector`: Filter by labels
* `-w, --watch`: Watch for changes
* `--dry-run`: Simulate command without making changes

### kubectl Examples

**Viewing resources:**

```bash
# List all pods in current namespace
kubectl get pods

# List pods across all namespaces
kubectl get pods --all-namespaces

# Get detailed information about a pod
kubectl describe pod my-pod

# View pod logs
kubectl logs my-pod

# Follow log output
kubectl logs -f my-pod

# View logs from specific container in multi-container pod
kubectl logs my-pod -c container-name
```

**Creating and managing resources:**

```bash
# Create resources from a file
kubectl create -f deployment.yaml

# Apply configuration (create or update)
kubectl apply -f deployment.yaml

# Delete resources
kubectl delete -f deployment.yaml
kubectl delete pod my-pod
kubectl delete deployment my-deployment

# Scale a deployment
kubectl scale deployment my-deployment --replicas=5
```

**Interacting with containers:**

```bash
# Execute command in container
kubectl exec my-pod -- ls /app

# Open interactive shell
kubectl exec -it my-pod -- /bin/bash

# Copy files to container
kubectl cp local-file.txt my-pod:/app/file.txt

# Copy files from container
kubectl cp my-pod:/app/log.txt local-log.txt
```

**Working with namespaces:**

```bash
# List namespaces
kubectl get namespaces

# Create namespace
kubectl create namespace my-namespace

# Set default namespace for context
kubectl config set-context --current --namespace=my-namespace

# Delete namespace
kubectl delete namespace my-namespace
```

---

## oc: The OpenShift CLI

### What is oc?

The **OpenShift command-line tool (oc)** is a superset of kubectl that includes all standard Kubernetes functionality while adding OpenShift-specific features.

**oc is a superset of kubectl because it includes:**

* All kubectl commands and functionality
* OpenShift-specific resources and operations
* Additional convenience commands
* Enhanced user experience features
* Integrated authentication mechanisms

This means any kubectl command works with oc, but oc provides additional capabilities specifically designed for OpenShift.

### OpenShift-Specific Features in oc

**Project management:**

OpenShift uses "projects" as an extension of Kubernetes namespaces with additional features:

```bash
# Create a new project
oc new-project my-project

# Switch to a project
oc project my-project

# List all projects
oc projects

# Delete a project
oc delete project my-project
```

Projects provide enhanced multi-tenancy with built-in RBAC and resource quotas.

**Build and deployment commands:**

```bash
# Create a new application from source code
oc new-app https://github.com/user/repo.git

# Create application from Docker image
oc new-app nginx:latest

# Start a build
oc start-build my-app

# View build logs
oc logs -f bc/my-app

# Get build status
oc get builds

# Cancel a build
oc cancel-build my-app-1
```

**Image streams:**

Image streams are OpenShift-specific resources for managing container images:

```bash
# List image streams
oc get imagestreams

# Import external image
oc import-image my-image --from=docker.io/library/nginx:latest --confirm

# Tag image
oc tag source-image:latest destination-image:v1.0

# Get image stream details
oc describe imagestream my-image
```

**Routes (external access):**

Routes provide external access to services (covered in detail in Part 7):

```bash
# Expose service via route
oc expose service my-service

# Create route with custom hostname
oc create route edge my-route --service=my-service --hostname=app.example.com

# List routes
oc get routes

# Get route URL
oc get route my-route -o jsonpath='{.spec.host}'
```

**Security context constraints:**

```bash
# List SCCs
oc get scc

# Add SCC to service account
oc adm policy add-scc-to-user anyuid -z my-serviceaccount

# View SCC details
oc describe scc restricted
```

**User and permission management:**

```bash
# Get current user
oc whoami

# Get current user token
oc whoami -t

# Add role to user
oc adm policy add-role-to-user edit user1 -n my-project

# Add cluster role to user
oc adm policy add-cluster-role-to-user cluster-admin user1

# View role bindings
oc get rolebindings
```

**Cluster administration:**

```bash
# View cluster operators
oc get clusteroperators

# View cluster version
oc get clusterversion

# View nodes
oc get nodes

# View node details
oc describe node worker-0

# Drain node for maintenance
oc adm drain worker-0 --ignore-daemonsets

# Make node schedulable again
oc adm uncordon worker-0
```

### Enhanced User Experience Features

**Login and authentication:**

```bash
# Login to OpenShift cluster
oc login https://api.cluster.example.com:6443

# Login with token
oc login --token=my-token --server=https://api.cluster.example.com:6443

# Logout
oc logout

# Get login token
oc whoami -t
```

**Integrated help:**

```bash
# Get help for any command
oc help
oc new-app --help

# Explain resource types
oc explain pod
oc explain pod.spec.containers
```

**Status and overview:**

```bash
# Get project status
oc status

# View resource quotas and limits
oc describe quota

# View resource usage
oc adm top nodes
oc adm top pods
```

---

## Working with Configuration Files

Both kubectl and oc work with YAML or JSON configuration files that define resource specifications.

### Applying Configurations

**Create or update resources from files:**

```bash
# Apply single file
oc apply -f deployment.yaml

# Apply multiple files
oc apply -f deployment.yaml -f service.yaml

# Apply all files in directory
oc apply -f ./manifests/

# Apply with recursive directory search
oc apply -R -f ./manifests/
```

**Differences between create and apply:**

* `create`: Creates new resources, fails if they already exist
* `apply`: Creates new resources or updates existing ones (declarative management)

**Best practice:** Use `apply` for declarative management, where configuration files are the source of truth.

### Generating Configuration Files

**Generate YAML without creating resources:**

```bash
# Generate deployment YAML
oc create deployment my-app --image=nginx:latest --dry-run=client -o yaml

# Generate service YAML
oc create service clusterip my-service --tcp=80:8080 --dry-run=client -o yaml

# Save to file
oc create deployment my-app --image=nginx:latest --dry-run=client -o yaml > deployment.yaml
```

**Export existing resources:**

```bash
# Export deployment as YAML
oc get deployment my-app -o yaml

# Export and save to file
oc get deployment my-app -o yaml > deployment-backup.yaml

# Export with cleaned output (remove runtime info)
oc get deployment my-app --export -o yaml > deployment-clean.yaml
```

### Patching Resources

**Make specific changes without editing entire resource:**

```bash
# Patch using JSON patch
oc patch deployment my-app -p '{"spec":{"replicas":5}}'

# Patch using strategic merge
oc patch deployment my-app --type=merge -p '{"spec":{"replicas":5}}'

# Patch from file
oc patch deployment my-app --patch-file=patch.yaml
```

---

## Debugging and Troubleshooting

### Viewing Logs

```bash
# View pod logs
oc logs my-pod

# Follow logs (stream updates)
oc logs -f my-pod

# View logs from previous container instance
oc logs my-pod --previous

# View logs from specific container in pod
oc logs my-pod -c container-name

# View logs from all pods with label
oc logs -l app=my-app

# Tail last 100 lines
oc logs --tail=100 my-pod
```

### Inspecting Resources

```bash
# Describe resource with detailed information
oc describe pod my-pod
oc describe deployment my-deployment
oc describe node worker-0

# Get events for debugging
oc get events
oc get events --sort-by='.lastTimestamp'

# Watch resources for changes
oc get pods -w

# Get resource with additional details
oc get pod my-pod -o wide
oc get nodes -o wide
```

### Executing Commands in Containers

```bash
# Execute single command
oc exec my-pod -- env

# Interactive shell
oc exec -it my-pod -- bash
oc exec -it my-pod -- sh

# Execute in specific container
oc exec my-pod -c container-name -- command

# Debug with temporary container
oc debug pod/my-pod
oc debug node/worker-0
```

### Port Forwarding

```bash
# Forward local port to pod
oc port-forward pod/my-pod 8080:80

# Forward to service
oc port-forward service/my-service 8080:80

# Listen on all interfaces
oc port-forward --address 0.0.0.0 pod/my-pod 8080:80
```

---

## Context and Configuration Management

### Understanding Contexts

Contexts define connection parameters for clusters:

* **Cluster**: API server endpoint
* **User**: Authentication credentials
* **Namespace**: Default namespace for commands

### Managing Contexts

```bash
# View current context
oc config current-context

# List all contexts
oc config get-contexts

# Switch context
oc config use-context my-context

# Set namespace for current context
oc config set-context --current --namespace=my-namespace

# Create new context
oc config set-context new-context --cluster=my-cluster --user=my-user --namespace=my-namespace
```

### Viewing Configuration

```bash
# View complete kubeconfig
oc config view

# View kubeconfig for specific context
oc config view --minify

# Get specific config value
oc config view -o jsonpath='{.users[*].name}'
```

---

## Productivity Tips

### Command Aliases

Create shell aliases for commonly used commands:

```bash
# Add to ~/.bashrc or ~/.zshrc
alias k='kubectl'
alias ocp='oc'
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kdp='kubectl describe pod'
alias kl='kubectl logs'
alias kx='kubectl exec -it'
```

### Shell Completion

Enable tab completion for faster command entry:

```bash
# Bash completion
source <(oc completion bash)
echo "source <(oc completion bash)" >> ~/.bashrc

# Zsh completion
source <(oc completion zsh)
echo "source <(oc completion zsh)" >> ~/.zshrc

# Use completion
oc get po<TAB>  # Completes to 'pods'
oc logs my-<TAB>  # Completes to available pod names
```

### Output Formatting

```bash
# JSON output
oc get pod my-pod -o json

# YAML output
oc get pod my-pod -o yaml

# Custom columns
oc get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase

# JSONPath queries
oc get pods -o jsonpath='{.items[*].metadata.name}'

# Wide output (more information)
oc get pods -o wide

# Show labels
oc get pods --show-labels

# Select specific fields
oc get pod my-pod -o jsonpath='{.status.podIP}'
```

### Label Selectors

```bash
# Filter by single label
oc get pods -l app=my-app

# Multiple labels (AND)
oc get pods -l app=my-app,tier=frontend

# Label existence
oc get pods -l environment

# Label non-existence
oc get pods -l '!environment'

# Set-based selectors
oc get pods -l 'environment in (production,staging)'
```

---

## Imperative vs Declarative Management

### Imperative Approach

Direct commands that immediately change cluster state:

```bash
# Create resources with commands
oc create deployment my-app --image=nginx:latest
oc expose deployment my-app --port=80
oc scale deployment my-app --replicas=3
```

**Advantages:**

* Quick for one-off tasks
* Easy to learn
* Immediate feedback

**Disadvantages:**

* Hard to track changes
* Not version-controlled
* Difficult to reproduce
* Manual and error-prone

### Declarative Approach

Define desired state in files and apply:

```bash
# Apply configurations from files
oc apply -f deployment.yaml
oc apply -f service.yaml

# Apply entire directory
oc apply -f ./manifests/

# Update by modifying files and reapplying
vim deployment.yaml
oc apply -f deployment.yaml
```

**Advantages:**

* Version-controlled configurations
* Reproducible deployments
* Easy to audit changes
* Better for automation
* Self-documenting

**Disadvantages:**

* More initial setup
* Requires file management
* Less immediate than imperative commands

**Best practice:** Use declarative management for production environments and imperative commands for quick debugging or testing.

---

## Key Takeaways

* kubectl is the standard Kubernetes CLI providing full cluster management capabilities
* oc is a superset of kubectl, adding OpenShift-specific features while maintaining kubectl compatibility
* Both tools communicate with the cluster API server to manage resources
* OpenShift extensions include project management, builds, deployments, image streams, and routes
* Command-line tools enable automation, scripting, and efficient cluster management
* Declarative management with configuration files is preferred for production environments
* Debugging tools include logs, exec, describe, events, and port forwarding
* Context management allows switching between clusters and namespaces
* Shell completion and aliases significantly improve productivity
* Output formatting options provide flexible data extraction and viewing

---

**Next in this series**: Part 7 will explore deploying applications on OpenShift, covering deployment strategies, application lifecycle management, and exposing services through routes.

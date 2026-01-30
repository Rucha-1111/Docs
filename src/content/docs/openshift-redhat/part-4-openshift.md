# Part 4: Getting Started with OpenShift

OpenShift is Red Hat's enterprise Kubernetes platform that extends Kubernetes with additional features designed for production deployments. This guide introduces OpenShift, explains how it builds upon Kubernetes, and covers deployment options and cluster management.

---

## What is OpenShift?

**OpenShift** is Red Hat's **enterprise Kubernetes platform** that helps organizations build, deploy, and manage containerized applications with enhanced security, developer tools, and operational capabilities.

While Kubernetes provides the orchestration foundation, OpenShift adds:

* **Enhanced security**: Built-in security policies, image scanning, and compliance tools
* **Developer tools**: Integrated development workflows and CI/CD pipelines
* **Operational features**: Advanced monitoring, logging, and lifecycle management
* **Enterprise support**: Professional support and stability guarantees from Red Hat
* **User-friendly interfaces**: Both web console and CLI optimized for productivity
* **Multi-tenancy**: Strong isolation between projects and teams
* **Integrated ecosystem**: Pre-integrated tools for complete application lifecycle

OpenShift transforms Kubernetes from an orchestration platform into a complete application platform suitable for enterprise production environments.

---

## OpenShift vs Kubernetes

Understanding the relationship between OpenShift and Kubernetes helps clarify what OpenShift provides.

### Core Relationship

* **Foundation**: OpenShift is built on Kubernetes
* **Compatibility**: OpenShift runs standard Kubernetes workloads
* **Extensions**: OpenShift adds enterprise features on top
* **Certification**: OpenShift is a certified Kubernetes distribution

### Key Differences

**Security:**

* OpenShift enforces stricter security policies by default
* Includes Security Context Constraints (SCCs) for fine-grained security control
* Integrated image scanning and vulnerability management
* Enhanced network security and segmentation

**Developer Experience:**

* Source-to-Image (S2I) for building containers from source code
* Integrated CI/CD with OpenShift Pipelines (Tekton)
* Developer web console with topology view
* Templates and Helm charts for application deployment
* Integrated container registry

**Operations:**

* Automated cluster updates and lifecycle management
* Built-in monitoring with Prometheus and Grafana
* Centralized logging with Elasticsearch, Fluentd, and Kibana (EFK)
* Integrated metrics and alerting
* Node management through Machine API

**Enterprise Features:**

* Multi-tenancy with project isolation
* Integrated authentication and authorization (LDAP, OAuth, SAML)
* Quota management and chargeback capabilities
* Commercial support from Red Hat
* Compliance and audit features

---

## OpenShift Cluster Architecture

An **OpenShift cluster** is a group of machines called **nodes** that work together to run applications.

### Cluster Components

**Control Plane Nodes:**

* Manage the overall cluster state and orchestration
* Run core Kubernetes and OpenShift services
* Handle API requests and scheduling decisions
* Store cluster configuration in etcd database
* Typically run in high-availability configuration (3 or more nodes)

**Worker Nodes:**

* Execute application workloads in containers
* Run kubelet, container runtime, and kube-proxy
* Provide computing resources (CPU, memory, storage)
* Can be scaled horizontally to handle more workload

**Infrastructure Nodes** (optional):

* Run platform-level services separate from user workloads
* Host ingress routers for external traffic
* Run internal image registry
* Execute logging and monitoring components
* Isolate infrastructure workload from applications

### Cluster Networking

OpenShift clusters include:

* **Pod network**: Internal communication between containers
* **Service network**: Stable endpoints for service discovery
* **External routes**: Ingress for external traffic via routers
* **Network policies**: Control traffic flow between applications

### Cluster Storage

OpenShift integrates with various storage systems:

* **Persistent volumes**: Long-term storage for stateful applications
* **Storage classes**: Different tiers of storage (SSD, HDD, etc.)
* **Dynamic provisioning**: Automatic storage allocation
* **Container-native storage**: Solutions like OpenShift Data Foundation

---

## Types of OpenShift Clusters

OpenShift supports different cluster configurations for various use cases and environments.

### Single-Node OpenShift

**Single-node clusters** run all control plane and worker functions on one machine:

* **Use cases**: Development, testing, edge computing, resource-constrained environments
* **Benefits**: Minimal resource requirements, simple setup, full OpenShift features
* **Limitations**: No high availability, limited scaling, suitable only for non-production
* **Resource requirements**: Typically 8 CPU cores, 32GB RAM minimum

### Multi-Node Clusters

**Multi-node clusters** separate control plane from worker nodes:

* **Use cases**: Production environments, high-availability applications, scalable workloads
* **Configuration**:
  * Minimum: 3 control plane nodes + 2 worker nodes
  * Recommended: 3 control plane + 3+ worker nodes
* **Benefits**: High availability, horizontal scaling, better resource utilization
* **Characteristics**: Production-ready, fault-tolerant, scalable

### Managed Clusters

**Managed OpenShift** services are provided by cloud providers with Red Hat:

**ROSA (Red Hat OpenShift Service on AWS):**

* Fully managed OpenShift on Amazon Web Services
* Red Hat and AWS jointly manage infrastructure
* Integrated with AWS services
* Pay-as-you-go pricing

**OpenShift Dedicated:**

* Fully managed OpenShift on major cloud providers (AWS, Google Cloud, Azure)
* Dedicated clusters for single customers
* Red Hat manages platform operations
* Customizable configurations

**Azure Red Hat OpenShift (ARO):**

* Jointly managed by Microsoft and Red Hat
* Native Azure integration
* Seamless access to Azure services
* Enterprise support from both companies

**Benefits of managed clusters:**

* Reduced operational overhead
* Automatic updates and patching
* Expert management from Red Hat
* Focus on applications rather than infrastructure
* SLA-backed availability guarantees

---

## Deploying OpenShift Clusters

OpenShift provides multiple deployment methods suited to different environments and requirements.

### OpenShift Installer (IPI - Installer Provisioned Infrastructure)

The **OpenShift Installer** is the primary tool for automated cluster deployment:

**Capabilities:**

* Automatically provisions infrastructure (VMs, networking, storage)
* Configures cluster components
* Sets up control plane and worker nodes
* Establishes networking and security
* Supports multiple cloud providers and virtualization platforms

**Deployment process:**

1. Prepare installation configuration file (install-config.yaml)
2. Run openshift-install command
3. Installer provisions infrastructure
4. Installer deploys OpenShift components
5. Cluster becomes available

**Supported platforms:**

* AWS, Azure, Google Cloud
* VMware vSphere
* OpenStack
* Bare metal (with some manual prerequisites)

### Assisted Installer

The **Assisted Installer** provides a user-friendly web interface for cluster deployment:

**Features:**

* Web-based workflow with guided steps
* Automatic hardware discovery
* Pre-flight validation checks
* Visual progress tracking
* Suitable for bare-metal and virtual environments

**Deployment process:**

1. Access Red Hat Hybrid Cloud Console
2. Create cluster definition
3. Generate and download Discovery ISO
4. Boot target machines with Discovery ISO
5. Machines register with Assisted Installer
6. Configure cluster settings through web UI
7. Assisted Installer deploys cluster

### Discovery ISO

A **Discovery ISO** is a bootable image used in assisted installations:

**Purpose:**

* Discover bare-metal or virtual machine hardware
* Register hosts with the Assisted Installer
* Collect hardware information (CPU, memory, storage, network)
* Enable hosts to join the cluster during installation

**Usage:**

1. Generate ISO from Assisted Installer web console
2. Download ISO image
3. Boot target machines from the ISO
4. Machines automatically connect to Assisted Installer
5. Hardware information appears in web console
6. Proceed with cluster installation

---

## Infrastructure Requirements

### Data Center Considerations

A **data center** is a physical location that contains servers, storage, networking equipment, and power systems.

OpenShift can be deployed:

* **On-premises data centers**: Organization's own facilities
* **Colocation facilities**: Shared data center space
* **Public cloud**: AWS, Azure, Google Cloud data centers
* **Hybrid environments**: Mix of on-premises and cloud

**Data center requirements:**

* Adequate power and cooling
* Network connectivity with sufficient bandwidth
* Physical security
* Redundant infrastructure for high availability

### Deployment Platforms

**OpenShift can be deployed on:**

**Bare Metal:**

* Physical servers without virtualization layer
* Maximum performance and resource efficiency
* Direct hardware access
* Requires more manual infrastructure management

**Virtual Machines:**

* Deployed on hypervisors (VMware, KVM, Hyper-V)
* Easier infrastructure management
* Resource flexibility
* Suitable for most deployments

**Public Cloud:**

* AWS, Azure, Google Cloud, IBM Cloud
* Elastic infrastructure
* Integrated cloud services
* Pay-as-you-go pricing

**Fully Managed Services:**

* ROSA, OpenShift Dedicated, ARO
* Minimal operational overhead
* Professional management included
* Fastest time to value

---

## Authentication and Access Control

### Pull Secrets

A **pull secret** is a credential file used by OpenShift to authenticate with container registries.

**Purpose:**

* Authenticate with Red Hat registries
* Pull container images during installation
* Access additional images during runtime
* Verify subscription entitlement

**Obtaining pull secrets:**

1. Create Red Hat account
2. Access Red Hat Hybrid Cloud Console
3. Navigate to OpenShift cluster creation
4. Download pull secret JSON file
5. Use during cluster installation

**Contents:**

* Registry authentication credentials
* Multiple registry endpoints
* Encoded authentication tokens
* Subscription verification data

---

## OpenShift Nodes Deep Dive

### What is an OpenShift Node?

An **OpenShift node** is a **machine** (physical or virtual) that is part of a cluster and runs OpenShift components and containerized workloads.

Each node includes:

* **Operating system**: Red Hat CoreOS (RHCOS)
* **Container runtime**: CRI-O for running containers
* **Kubelet**: Agent managing pods on the node
* **Kube-proxy**: Network proxy for service connectivity
* **Node components**: Monitoring, logging agents

### Running OpenShift on Virtual Machines

OpenShift can run on **virtual machines** by installing it on hypervisors:

**Supported hypervisors:**

* **VMware vSphere**: Enterprise virtualization platform
* **KVM**: Linux kernel-based virtualization
* **VirtualBox**: Desktop virtualization (development only)
* **Hyper-V**: Microsoft virtualization platform

**Each node runs as a separate VM with:**

* Dedicated CPU cores
* Allocated memory
* Virtual disks
* Virtual network interfaces

**Benefits:**

* Easier resource management
* Snapshot and backup capabilities
* Hardware abstraction
* Resource isolation

---

## OpenShift Local (Formerly CodeReady Containers)

**OpenShift Local** is a lightweight, single-node OpenShift cluster designed for local development and testing on a developer's machine.

### Features

* **Full OpenShift experience**: Includes core OpenShift features
* **Single-node deployment**: Runs on laptop or workstation
* **Quick setup**: Minutes to get running
* **Development tools**: Integrated developer tools and CLI
* **Resource efficient**: Optimized for local development

### Use Cases

* Learning OpenShift without cloud resources
* Local application development
* Testing OpenShift features
* Developing operators and extensions
* CI/CD pipeline development

### Requirements

* **CPU**: 4 cores minimum (recommended 6+)
* **Memory**: 9GB minimum (recommended 16GB+)
* **Storage**: 35GB available disk space
* **Hypervisor**: Native hypervisor support (Hyper-V, HyperKit, KVM)

### Limitations

* Not suitable for production
* Limited to single node (no HA)
* Reduced performance compared to full clusters
* Cannot test multi-node scenarios

---

## Initial Cluster Configuration

### What a Cluster Includes When Created

When an OpenShift cluster is created, it automatically includes:

**Core Components:**

* Kubernetes control plane services
* OpenShift-specific operators and controllers
* Authentication and authorization systems
* Default networking configuration

**Infrastructure Services:**

* Internal image registry
* Ingress routers for external access
* Monitoring stack (Prometheus, Alertmanager, Grafana)
* Logging infrastructure

**Storage Integration:**

* Storage class definitions
* Persistent volume provisioning
* Container storage interface (CSI) drivers

**Security Configurations:**

* Default security policies and SCCs
* Network policies
* Certificate management
* Secret encryption

**Networking:**

* Pod network (CNI plugin)
* Service network
* DNS services
* Network policies

**User Projects:**

* Default projects for system services
* Namespace isolation
* Resource quotas

---

## Key Takeaways

* OpenShift is an enterprise Kubernetes platform with enhanced security, developer tools, and operational features
* Clusters consist of control plane nodes (management) and worker nodes (workloads)
* Single-node clusters serve development needs while multi-node clusters provide production capabilities
* Managed OpenShift services (ROSA, OpenShift Dedicated, ARO) reduce operational overhead
* Deployment options include OpenShift Installer (IPI) and Assisted Installer for different environments
* OpenShift can run on bare metal, virtual machines, or public clouds
* Pull secrets authenticate cluster access to Red Hat registries
* OpenShift Local provides full OpenShift experience for local development
* Newly created clusters include core services, monitoring, logging, and networking pre-configured

---

**Next in this series**: Part 5 will explore OpenShift operators, explaining how they automate platform management through machine management, node configuration, and cluster state reconciliation.

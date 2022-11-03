# Declarative Approach

**deployment.yml**

```yml
apiVersion: apps/v1

kind: Deployment

metadata:
  name: second-app-deployment

spec: #spec of deployment
  replicas: 1

  selector: #map or select which POD should be connect to the deployment object
    matchLabels:
      app: second-app
      tier: backend

  template: #template of pod
    metadata:
      labels:
        app: second-app
        tier: backend

    spec: #spec of pod
      containers:
        - name:
```

```javascript
  kubectl apply -f deployment.ymal
```

<hr/>

**service.yml**

```yml
apiVersion: v1

kind: Service

metadata:
  name: backend

spec:
  selector:
    app: second-app # any Pod that has this label will be served under this service

  ports:
    - protocol: 'TCP'
      port: 80 #outside Pod
      targetPort: 8080 #innner or container pod
    # - protocol: 'TCP'
    #   port: 443
    #   targetPort: 443
```

```javascript
  kubectl apply -f service.ymal
```

```javascript
  minikube service backend
```

<hr/>

You can combine Deployment & Service together in 1 file as well

**master-deployment.yml**

```yml
apiVersion: v1

kind: Service

metadata:
  name: backend

spec:
  selector:
    app: second-app

  ports:
    - protocol: 'TCP'
      port: 80
      targetPort: 8080

  type: LoadBalancer

--- # 3 dash denotes the end of 1 object and start the new object afterwards

apiVersion: apps/v1

kind: Deployment

metadata:
  name: second-app-deployment

spec:
  replicas: 1

  selector:
    matchLabels:
      app: second-app
      tier: backend

  template:
    metadata:
      labels:
        app: second-app
        tier: backend

    spec:
      containers:
        - name: second-node
          image: heanglypa/kub-first-app:2
```

```javascript
  kubectl apply -f master-deployment.yml
```

```javascript
  minikube service backend
```

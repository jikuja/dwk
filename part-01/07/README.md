Application is written with Node using two external libraries

Following steps were done after creation of initial app.

# Build Docker image
```
docker build -t jikuja/dwk:app07 .
```

# Tag Docker image
```
docker tag jikuja/dwk:app07 jikuja/dwk:app07
```

# Run docker image
```
# run with interactive tty and remove container automatically
docker run -it --rm jikuja/dwk:app07
```
Not required but might help if running some problems

# Push Docker image
```
docker image push jikuja/dwk:app07
```

# Run with Kubernetes

Requirement: 
```
Add ... an ingress so that you can access it with a browser.
```

## Deploy app, ingress and service into local cluster

Deploy image into cluster:
```
kubectl apply -f manifests/
```
that returned:
```
deployment.apps/hashgenerator-dep created
ingress.networking.k8s.io/hashresponse-ingress created
service/hashresponse-svc unchanged
```

# Check the logs
Read the logs
```
kubectl logs -f hashgenerator-dep-7bd8c5c98c-bdz4m

> app07@1.0.0 start
> node index.js

2022-06-26T12:57:55.733Z: e614ff78-6b22-4c42-9cdc-536aba2ffd3c
Server started in port 3000
2022-06-26T12:58:00.742Z: 7718942e-d83e-459e-8f28-822d3c3e7cee
2022-06-26T12:58:05.744Z: 5580199e-47d4-487e-bee0-0408d5f43ea6
```

# Test the Ingress and ClusterIP
```
$ curl localhost:8081/
{"time":"2022-06-26T14:17:56.499Z","random":"91b0567c-6b50-49dd-a41a-129e10bfcd0b"}
$ curl localhost:8081/
{"time":"2022-06-26T14:18:01.500Z","random":"ac8865e4-b32f-4567-a8d0-0425c61165f0"}
$ curl localhost:8081/
{"time":"2022-06-26T14:18:01.500Z","random":"ac8865e4-b32f-4567-a8d0-0425c61165f0"}
```

Looks like k3d port-forward, ingress and ClusterIP are working. The result displays that
server app is caching timestamp and random value in memory and refreshing the values once
in five seconds.

# Lessons learned
ClusterIP selector was difficult to configure for this exercise.
Missed something first and selector I used did not match the pod label.

As result of misconfiguration I got HTTP 404 replies without good explanations.
To troubleshoot the probem I had to do https://k3d.io/v5.4.1/usage/exposing_services/
and use VS Codes kuberneter explorer to check what was created. Then I finally found the issue.

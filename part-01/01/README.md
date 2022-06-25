Application is written with Node using one external library to generate random UUIDs.

Following steps were done after creation of initial app.

# Build Docker image
```
docker build -t jikuja/dwk:app01 .
```

# Tag Docker image
```
docker tag jikuja/dwk:app01 jikuja/dwk:app01
```

# Run docker image
```
# run with interactive tty and remove container automatically
docker run -it --rm jikuja/dwk:app01
```
Not required but might help if running some problems

# Push Docker image
```
docker image push jikuja/dwk:app01
```

# Run with Kubernetes

Full requirement: 
```
Deploy it into your Kubernetes cluster and confirm that it's running with kubectl logs ...
```

## Deploy app into local cluster

Deploy image into cluster:
```
kubectl create deployment hashgenerator-dep --image=jikuja/dwk:app01
```
that returned:
```
deployment.apps/hashgenerator-dep created
```

# Check the logs
Readd the logs
```
kubectl logs -f hashgenerator-dep-5465c45ffb-rmvvj
```

that returned
```

> app01@1.0.0 start
> node index.js

2022-06-25T14:59:52.996Z: 38177370-bb60-4336-8650-b809923888db
2022-06-25T14:59:58.002Z: 38177370-bb60-4336-8650-b809923888db
2022-06-25T15:00:03.004Z: 38177370-bb60-4336-8650-b809923888db
...
```

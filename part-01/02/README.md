Application is written with Node using express.

Following steps were done after creation of initial app.

# Test the app manually
Start the app:
```
~/src/dwk/part-01/02$ npm start

> app02@1.0.0 start /home/jikuja/src/dwk/part-01/02
> node index.js

Starting HTTP server on port 3000
```

meanwhile in other terminal
```
~/src/dwk/part-01/02$ curl http://localhost:3000
Not sure what to configure and return!


# Build Docker image
```
docker build -t jikuja/dwk:app02 .
```

# Tag Docker image
```
docker tag jikuja/dwk:app02 jikuja/dwk:app02
```

# Run docker image
```
# run with interactive tty and remove container automatically
~/src/dwk/part-01/02$ docker run -it --rm jikuja/dwk:app02

> app02@1.0.0 start
> node index.js

Starting HTTP server on port 3000
```
Not required but might help if running some problems. Port 3000 not reachable because did not configure it.

# Push Docker image
```
docker image push jikuja/dwk:app02
```

# Run with Kubernetes

## Deploy app into local cluster

Deploy image into cluster:
```
kubectl create deployment web-server --image=jikuja/dwk:app02
```
that returned:
```
deployment.apps/web-server created
```

# Check the logs
Readd the logs
```
kubectl logs -f web-server-649b9897b6-plkdx
```

that returned
```

> app02@1.0.0 start
> node index.js

Starting HTTP server on port 3000
...
```

No access to port 3000 like explained in the assignment.

# Dirty hack to test app when running on docker:
```
docker exec -it da8056577727 sh
/usr/src/app # nc localhost:3000
GET /

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 38
ETag: W/"26-5NOT/b79S/H5huEMcY1pDs/YPPw"
Date: Sat, 25 Jun 2022 15:49:03 GMT
Connection: close

Not sure what to configure and return!

/usr/src/app # 
```
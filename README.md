```shell
$ docker build -t node-shutdown .
$ docker run -d -p 3000:3000 node-shutdown
$ curl http://localhost:3000
$ docker stop
```

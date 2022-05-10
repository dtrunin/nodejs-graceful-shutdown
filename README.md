Code samples for https://dtrunin.github.io/2022/04/05/nodejs-graceful-shutdown.html

```shell
$ docker build -t node-shutdown .
$ docker run -d -p 3000:3000 node-shutdown
$ curl http://localhost:3000
$ docker stop
```

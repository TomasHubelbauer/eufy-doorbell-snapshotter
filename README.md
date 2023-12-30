# Eufy Doorbell Snapshotter

This repository hosts a Vite-based React web app which is able to connect to a
Eufy doorbell and take a snapshot of its camera stream.

At the moment, the project is blocked because of a problem with the Eufy client
dependency. See https://github.com/bropat/eufy-security-client/issues/436 and
https://github.com/mqttjs/MQTT.js/issues/1769 for the blocking issues.

The problem appears to be an ESM misconfiguration of the `mqtt` dependency.

# !bin/sh
buf generate
buf export . --output ../api/car-api/src/proto
buf export . --output ../api/race-api/src/proto
buf export . --output ../api/driver-api/src/proto

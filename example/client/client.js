// Copyright (c) 2019 SafetyCulture Pty Ltd. All Rights Reserved.

import Sentencer from 'sentencer';
import { ExampleServicePromiseClient } from './example_grpc_web_pb';
import { ExampleOneRequest } from './example_pb';

var client = new ExampleServicePromiseClient('http://0.0.0.0:18080', null, null);

function exampleOne() {
  var req1 = new ExampleOneRequest();
  req1.setMsg(Sentencer.make("This is {{ an_adjective }} {{ noun }}."));
  client.exampleOne(req1).then(res => {
    console.log(res.toObject())
  }).catch(console.error)
}

exampleOne()
setInterval(exampleOne, 10000)
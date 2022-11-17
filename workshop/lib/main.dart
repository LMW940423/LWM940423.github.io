import 'dart:developer';

import 'package:lottie/lottie.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '보물찾기',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.indigo,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    linkLottie();
  }

  void setLottie() {
    log("setLottie");
    Lottie.asset(
      'assets/lotties/congratulations_1.json',
      repeat: false,
      reverse: false,
      animate: false,
    );
  }

  void linkLottie() {
    log("linkLottie");

  }


  @override
  Widget build(BuildContext context) {

    String myUrl = Uri.base.toString();
    String? param1 = Uri.base.queryParameters["seq"];

    log("myUrl : $myUrl");
    log("param1 : $param1");
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
                "적혀있는 번호에 따라 보물이 달라집니다!",
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold
                ),
            ),
            const Text(
              "(어떤 보물인지는 게임 끝난 후 확인 가능합니다)",
              style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: Colors.red
              ),
            ),
            Lottie.network(
              'https://assets2.lottiefiles.com/packages/lf20_kf95m1dj.json',
              repeat: true,
              animate: true,
            )
          ],
        ),
      )
    );
  }
}
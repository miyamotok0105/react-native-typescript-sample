# react-native-typescript-sample

下記の実行環境にてWebとiOSの両方を動かすサンプル。

```
React Native
TypeScript
iOS/Web
```


## 実行

実行前のXcode設定

[m1 macのxcode設定](https://qiita.com/peka2/items/73ee82fe3555217ff712)


## iOSをビルドして実行

```
#npm run start-dev
#npm run ios-dev

npm run start:ios
```

## Webをビルドして実行

```
#npm run start-web

npm run build-web
cd build
php -S localhost:8000

```


## 初期設定の時のメモ

```
 react-native init app

npm install typescript @types/react @types/react-native --save-dev
cd ./app/ios


npm i

#m1 macの場合
arch -x86_64 pod install
arch -x86_64 pod install --repo-update
or
pod install
pod install --repo-update

npm run start
```


[React NativeでTypeScriptを使う方法](https://dev-yakuza.posstree.com/react-native/typescript/)

[React Native with TypeScript](https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7)


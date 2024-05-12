# my-budget-app

React の学習として家計簿アプリを作成
ゼロから作り上げることが目的のため、デザインに関しては重点を置いていない。

## URL

https://my-budget-app-97ffd.web.app/

## 使用方法

- アカウントがない場合
  - 「SIGN UP」よりメールアドレス・パスワードを入力してアカウント作成
- アカウントがある場合

  - 「SIGN IN」よりメールアドレス・パスワードを入力してログイン

- 「収入・支出」、「カテゴリ」を選択して「登録」ボタンを押下する

### ※注意

現在は当月のみの収支入力しかできません
（次月・前月の入力は今後対応していく予定です）

## 画像

Main  
![image](https://github.com/Tomo-kw/my-budget-app/assets/68243050/366bc184-a627-4273-8798-f33d4610bee7)

SIGN IN  
![image](https://github.com/Tomo-kw/my-budget-app/assets/68243050/cbc52eb6-845c-4970-b08a-749ff821a26f)

SIGN UP  
![image](https://github.com/Tomo-kw/my-budget-app/assets/68243050/4cbacf85-0514-4c10-954a-fbdfcd7c477c)

## 構成

| 項目       | 用途                       | バージョン |
| ---------- | -------------------------- | ---------- |
| React      | ---                        | 18.2.0     |
| TypeScript | ---                        | 4.9.5      |
| ESLint     | 静的解析ツール             | 8.45.0     |
| Prettier   | コードフォーマッター       | 3.0.0      |
| firebase   | アプリ開発プラットフォーム | 10.3.0     |
| recharts   | グラフ描画トライブラリ     | 2.7.3      |
| Chakra-UI  | UIライブラリ               | 2.8.0      |

## ディレクトリ構成：主要ファイル

```
src
├── App.tsx
├── auth
│   ├── AuthProvider.tsx
│   └── PrivateRoute.tsx
├── components
│   ├── Header.tsx
│   ├── IncomeExpenseForm.tsx
│   ├── IncomeExpenseList.tsx
│   ├── IncomeExpensePieChart.tsx
│   ├── MonthlyBalance.tsx
│   ├── YearMonthDisplay.tsx
│   ├── consts
│   │   └── budget.ts
│   ├── item
│   │   ├── BudgetItem.tsx
│   │   ├── BudgetItemList.tsx
│   │   ├── IncomeExpenseDisplayItem.tsx
│   │   └── SignItem.tsx
│   └── theme
│       └── theme.ts
├── firebase.ts
├── hooks
│   ├── useIncomeExpense.ts
│   ├── useSignIn.ts
│   ├── useSignOut.ts
│   └── useSignUp.ts
├── index.tsx
├── layouts
│   └── ContentContainer.tsx
├── pages
│   ├── IncomeExpense.tsx
│   └── auth
│       ├── SignIn.tsx
│       └── SignUp.tsx
└── react-app-env.d.ts
```

## Installation

- React
  - `npx create-react-app budget-app --template typescript`
- Firebase
  - `npm install -g firebase-tools`

## Deployment

- ローカルブラウザで表示
  - `npm start`
  - http://localhost:3000
- Webで表示
  - `firebase init`
  - `firebase login`
  - `npm run build`
  - `firebase deploy --only hosting,storage,firestore`

## 残課題・今後実装したいこと

- 当月しか家計簿の登録ができないため、次月・前月も登録できるようにする
- デザインが適当なのでどこかで整えたい

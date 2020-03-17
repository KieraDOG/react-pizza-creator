# Pizza Creator

MVP 

- 去掉左面的CSS动画
- 地址输入表单
- 去掉多个 Pizza 的选择
- Size 选择列表
- 选择 Size
- Toppings 选择列表
- 选择 Toppings
- Order Summary
- 计算总价
- Place Order (log)
- 地址表单的输入验证

---
Nick (6月份)

As a customer, I would like to order a pizza with a SIZE, and can ONLY select A SIZE each time.
As a customer, I should able to see my SIZE been SELECTED

AC (Acceptance Criteria):
- Design
- Select size and only able to select one size, overwrite prev select
- Highlight selected size

1. put state into <Size />
2. lift state to <SelectTheSize />

1. 增加了信心
2. Regression test

Test Case  (系统跑代码没有任何问题 PASS)

---

Leonard (3月份)

3. lift state to <App />
4. put state into <OrderSummary />

---

Test

表单验证
- 不为空
- 格式为 Email
- Confirm Email 与 Email 相同
- Postcode 是4位数字
- onChange 触发 或者 onSubmit 触发

---

Milestone 1:
- PlaceOrder 表单验证
- Toppings 选择列表的验证
- 对接后端 Place Order

Milestone n:
- ...

---

1. create react app
2. styled-component
3. basic project structure

---

yarn / npm

- yarn.lock -> yarn
- package-lock.json -> npm

---

1. Break The UI Into A Component Hierarchy
2. Build A Static Version in React
3. Identify The Minimal (but complete) Representation Of UI State
4. Identify Where Your State Should Live
5. Add Inverse Data Flow

---

CSS libs

## CSS in Js

### styled-components

- https://styled-components.com/docs/basics#motivation
- https://sass-lang.com/

## Normal css

### CSS Modules

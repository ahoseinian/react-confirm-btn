# React Confirm Button
Simple react component that handles confirmation before running an action

### Installation

```
npm install react-confirm-btn --save
// or
yarn add react-confirm-btn
```

### Example

```
import ConfirmBtn from 'react-confirm-btn'

...
<ConfirmBtn onConfirm="..." > Delete </ConfirmBtn>

```

### Props
```

{
    onConfirm: () => void,
    confirmText?: string,
    time?: number,
    style?: {},
    ...
}

```

### Demo
Check out the [Demo](https://ahoseinian.github.io/react-confirm-btn/storybook-static/) generated using [storybook](https://github.com/storybooks/storybook)

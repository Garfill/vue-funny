# vue-funny

Some funny components for Vue.js.

## Usage
```
yarn add vue-funny
```

## Import in your .js file
```
import VueFunny from 'vue-funny'

Vue.use(VueFunny)
```

When you use global installation for VueFunny, you can use the following components or directives without other extra installation

### Components

You can also import and use an exact component from vue-funny like this:
```
import { Aniplex } from 'vue-funny'
Vue.use(Aniplex)
```

### **FunnyAniplex**
Aniplex-like rotation effect

#### Usage
```
<funny-aniplex word="aniplex" />
```


### **FunnyMark**
The customized style underline with animation through your words.

#### Usage
```
<funny-mark duration="1" color="red">
  This is your mark word.
</funny-mark>
```

Some props you can set into this component

**duration**: The number of duration for the animation

**color**: The color of underline

### **FunnyVerify**
The verify component, people can swipe on the image for verification.

#### Usage
```
<funny-verify :image="yourImg" offset="5"></funny-verify>
```

Props: Some props for this component.
| prop | describe |
| ---- | ---- |
| image | A image used for verification. This should be a string. |
| offset | The offset distance which is used for judging whether the swiper in the verify area |

Events: There are some events for this component when interacting.

| event | describe |
| ---- | ----|
| refresh | When refresh the image, a new image should be pass in this component |
| success | When the mouse is up and the swiper goes into the verify area |
| fail | When the mouse is up and the swiper isn't in the verify area |
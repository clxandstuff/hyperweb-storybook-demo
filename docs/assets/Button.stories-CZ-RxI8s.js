import{B as o}from"./Button-D_8mr6yP.js";import"./jsx-runtime-u17CrQMm.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,c={title:"Example/Button",component:o,parameters:{layout:"centered",controls:{exclude:["onClick","primary"]}},argTypes:{slot:{control:"text",table:{category:"Slots"}}},tags:["autodocs"]},r={args:{primary:!0,label:"Button",backgroundColor:"hsla(236, 100%, 66%, 1)",size:"small"},tags:["autodocs"]},a={args:{label:"Button"}},e={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button',
    backgroundColor: "hsla(236, 100%, 66%, 1)",
    size: "small"
  },
  tags: ['autodocs']
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...s.parameters?.docs?.source}}};const m=["Primary","Secondary","Large","Small"];export{e as Large,r as Primary,a as Secondary,s as Small,m as __namedExportsOrder,c as default};

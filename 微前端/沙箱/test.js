
let foo = 3

const ctx = {
  func: (v) => {
    console.log(v);
  },
  // foo: "foo",
};

function sandbox(code) {
  code = "with (ctx) {" + code + "}";
  return new Function("ctx", code);
}

// 待执行程序
const code = `
    func(foo)
`;

sandbox(code)(ctx); // bar
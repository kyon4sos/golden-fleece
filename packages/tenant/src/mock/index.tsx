const mockMaterial = (startIndex, stopIndex) => {
  let list = new Array(stopIndex).fill({})
    .map((mat, idx) => ({
      name: idx.toString(),
      url: "https://shoe-1303249748.cos.ap-shanghai.myqcloud.com/shoe/works/0.59613756369011581655879927.555.png",
      id: startIndex + idx
    }))
  console.log(list);
  return list
}

export {
    mockMaterial
}
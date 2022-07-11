function Logo({ width, height }) {
  return (
    <img
      className={`${width || "w-20"} ${height || "h-20"}`}
      alt="Logo"
      src="https://camo.githubusercontent.com/ec4626e44870f03423673ea299ceb6f37afa7f9bf848ca5ad095feca41f230b6/68747470733a2f2f6c616e64696e672d706167652d626f6f6b2e66726f6e7431302e636f6d2f696d616765732f6672616d65776f726b732f6a6573742e706e67"
    />
  );
}

export default Logo;

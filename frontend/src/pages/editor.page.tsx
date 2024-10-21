import SideBar from "../components/sidebar.componennt";

function Editor() {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <h1>Editor</h1>
        <input className="text-black" name="text" />
      </div>
    </div>
  );
}

export default Editor;

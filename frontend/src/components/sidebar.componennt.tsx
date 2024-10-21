import { SlNotebook } from "react-icons/sl";
import { FiFolderPlus } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import style from "./sass/sidebar.module.scss";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

function SideBar() {
  const folders = {
    folder1: {
      file1: {
        title: "file1",
        content: "content1",
      },
      file2: {
        title: "file2",
        content: "content2",
      },
    },
    folder2: {
      file1: {
        title: "file1",
        content: "content1",
      },
      FaFolder1in2: {
        file1infolder1in1: {
          title: "file1infolder1in2",
          content: "content1infolder1in2",
        },
        file1infolder1in2: {
          title: "file1infolder1in2",
          content: "content1infolder1in2",
        },
        file1infolder1in3: {
          title: "file1infolder1in2",
          content: "content1infolder1in2",
        },
      },
      FaFolder2in2: {
        file1infolder1in2: {
          title: "file1infolder1in2",
          content: "content1infolder1in2",
        },
      },
      file2: {
        title: "file2",
        content: "content2",
      },
    },
    folder3: {},
  };

  // Lift the selected state up to the parent
  const [selectedItem, setSelectedItem] = useState("");
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());
  console.log(selectedItem);

  type FolderItemProps = {
    name: string;
    content: Record<string, any>;
    selectedItem: string;
    onSelect: (key: string, type: "folder" | "file") => void;
    openFolders: Set<string>;
    path: string;
  };

  function FolderItem({
    name,
    content,
    selectedItem,
    onSelect,
    openFolders,
    path,
  }: FolderItemProps) {
    const fullPath = path ? `${path}/${name}` : name;
    const isOpen = openFolders.has(fullPath);

    const handleClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
      key: string,
      type: "folder" | "file"
    ) => {
      e.stopPropagation();
      onSelect(key, type);
    };

    return (
      <div>
        <div
          data-key={fullPath}
          className={`${style.folders} flex gap-2 items-center ${
            selectedItem === fullPath ? "bg-gray-200 bg-opacity-5" : ""
          }`}
          onClick={(e) => handleClick(e, fullPath, "folder")}
          style={{ cursor: "pointer" }}
        >
          <div>
            {isOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </div>
          <FaFolder className="fill-yellow-600 w-4 h-4" />
          <span>{name}</span>
        </div>

        {isOpen && (
          <div className="pl-2">
            {Object.entries(content).map(([key, item], index) => {
              const itemPath = `${fullPath}/${key}`;
              if (typeof item === "object" && !item.hasOwnProperty("title")) {
                return (
                  <FolderItem
                    key={index}
                    name={key}
                    content={item}
                    selectedItem={selectedItem}
                    onSelect={onSelect}
                    openFolders={openFolders}
                    path={fullPath}
                  />
                );
              } else {
                return (
                  <div
                    data-key={itemPath}
                    key={key}
                    onClick={(e) => handleClick(e, itemPath, "file")}
                    className={`${
                      style.files
                    } px-2 py-1 flex gap-2 items-center ${
                      selectedItem === itemPath
                        ? "bg-gray-200 bg-opacity-5"
                        : ""
                    }`}
                  >
                    <FaFile className="fill-gray-400 w-4 h-4" />
                    <span>{item.title}</span>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    );
  }

  const handleSelect = (key: string, type: "folder" | "file") => {
    setSelectedItem(key);
    if (type === "folder") {
      setOpenFolders((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(key)) {
          newSet.delete(key);
        } else {
          newSet.add(key);
        }
        return newSet;
      });
    }
  };

  return (
    <aside
      className={`${style.sidebar} h-dvh max-w-80 w-full overflow-scroll select-none`}
    >
      <div className="w-full p-1">
        <h3 className={`${style.sideBarHeading} pt-3 pb-2`}>
          <div className="flex items-center">
            <div className="flex gap-2 items-center mr-auto">
              <span>
                <SlNotebook />
              </span>
              <span>Notes</span>
            </div>
            <div>
              <button className="btn btn-primary">
                <FiFolderPlus />
              </button>
            </div>
          </div>
        </h3>
        {Object.entries(folders).map(([folderName, content], index) => (
          <FolderItem
            key={index}
            name={folderName}
            content={content}
            selectedItem={selectedItem}
            onSelect={handleSelect}
            openFolders={openFolders}
            path=""
          />
        ))}
      </div>
    </aside>
  );
}

export default SideBar;

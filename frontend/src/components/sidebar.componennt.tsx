import { SlNotebook } from "react-icons/sl";
import { FiFilePlus, FiFolderPlus } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";
import style from "./sass/sidebar.module.scss";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

type FileContent = {
  title: string;
  content: string;
};

type FolderStructure = {
  [key: string]: FileContent | FolderStructure;
};

type FolderItemProps = {
  name: string;
  content: FolderStructure;
  selectedItem: string;
  onSelect: (key: string, type: "folder" | "file") => void;
  openFolders: Set<string>;
  path: string;
};

function isFileContent(
  item: FileContent | FolderStructure
): item is FileContent {
  return (item as FileContent).title !== undefined;
}

function SideBar(): JSX.Element {
  const folders: FolderStructure = {
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

  function sortFolderStructure(
    folderStructure: FolderStructure
  ): FolderStructure {
    const sortedEntries = Object.entries(folderStructure).sort(
      ([keyA, valueA], [keyB, valueB]) => {
        const isFileA = isFileContent(valueA);
        const isFileB = isFileContent(valueB);

        if (isFileA && !isFileB) return 1;
        if (!isFileA && isFileB) return -1;
        return keyA.localeCompare(keyB);
      }
    );

    return sortedEntries.reduce((acc, [key, value]) => {
      acc[key] = isFileContent(value) ? value : sortFolderStructure(value);
      return acc;
    }, {} as FolderStructure);
  }

  const sortedFolders = sortFolderStructure(folders);

  const [selectedItem, setSelectedItem] = useState<string>("");
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());

  function FolderItem({
    name,
    content,
    selectedItem,
    onSelect,
    openFolders,
    path,
  }: FolderItemProps): JSX.Element {
    const fullPath = path ? `${path}/${name}` : name;
    const isOpen = openFolders.has(fullPath);

    const handleClick = (
      e: React.MouseEvent<HTMLDivElement>,
      key: string,
      type: "folder" | "file"
    ): void => {
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
          onClick={(e): void => handleClick(e, fullPath, "folder")}
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
              if (!isFileContent(item)) {
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
                    onClick={(e): void => handleClick(e, itemPath, "file")}
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

  const handleSelect = (key: string, type: "folder" | "file"): void => {
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
              <div className="hover:bg-gray-300 hover:bg-opacity-15 cursor-pointer p-1 rounded-full">
                <FiFolderPlus />
              </div>
            </div>
            <div>
              <div className="hover:bg-gray-300 hover:bg-opacity-15 cursor-pointer p-1 rounded-full">
                <FiFilePlus />
              </div>
            </div>
          </div>
        </h3>
        {Object.entries(sortedFolders).map(([folderName, content], index) => (
          <FolderItem
            key={index}
            name={folderName}
            content={content as FolderStructure}
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

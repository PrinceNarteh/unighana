import { deleteNote, favouriteNote } from "@/features/notes/notesSlice";
import { useAppDispatch } from "@/store";
import { INote } from "@/types/note";
import { formatDistance } from "date-fns";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Card = ({ idx, note }: { idx: number; note: INote }) => {
  const dispatch = useAppDispatch();
  const { title, content, _id, favourite } = note;

  const dateCreated = formatDistance(new Date(note.createdAt), new Date(), {
    addSuffix: true,
  });

  const handleDelete = (noteId: string) => {
    dispatch(deleteNote(noteId));
    toast.success("Note deleted successfully");
  };

  const handleFavourite = (noteId: string) => {
    dispatch(favouriteNote(noteId));
    toast.success("Note favourited successfully.");
  };

  return (
    <div
      className={`h-52 p-5 relative group overflow-hidden cursor-pointer shadow-md bg-gradient-to-br rounded-lg ${
        idx % 2 === 0
          ? "from-[#d35341] to-[#fd8271]"
          : "from-[#088181] to-[#088181]"
      }
    `}
    >
      <Link href={`/${_id}`} className={`text-white max-w-md`}>
        <h3 className="truncate font-bold text-xl mb-2 border-b border-b-gray-400/70 pb-1">
          {title}
        </h3>
        <p className="line-clamp-4 text-gray-300 h-24">{content}</p>
        <p className="absolute bottom-5">{dateCreated}</p>
      </Link>
      {/* Options */}
      <div className="absolute h-full right-0 top-0 bg-white bg-opacity-10 border-l border-l-white text-white flex flex-col justify-center px-[10px] text-2xl gap-5 transition-all translate-x-14 group-hover:-translate-x-0 duration-300 shadow-xl">
        <span className="cursor-pointer" onClick={() => handleFavourite(_id)}>
          {favourite ? (
            <MdFavorite className=" text-[red] hover:scale-110" />
          ) : (
            <MdOutlineFavoriteBorder className="hover:scale-110" />
          )}
        </span>
        <Link href={`/${_id}/edit`}>
          <BiEdit className="cursor-pointer hover:scale-125 duration-200" />
        </Link>
        <MdOutlineDelete
          className="cursor-pointer hover:scale-125 duration-200"
          onClick={() => handleDelete(_id)}
        />
      </div>
    </div>
  );
};

export default Card;

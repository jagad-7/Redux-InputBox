import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/UserSlice";


const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId)

    return <span>by {author ? author.name : 'UnknowAuthor'}</span>

}

export default PostAuthor
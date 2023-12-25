import { FaRegCircleUser } from "react-icons/fa6";
// mock comment data for creating nested comments
const commentData =[
    {
        name:"Darshan ",
        text: "LEVEL-1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies:[]
    },
    {
        name:"Darshan ",
        text: "LEVEL-1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies:[
            {
                name:"Darshan ",
                text: "LVEL-2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies:[
                    {
                        name:"Darshan ",
                        text: "LEVEL-3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies:[]
                    }
                ]
            },
            {
                name:"Darshan ",
                text: "LEVEL-2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies:[]
            },
        ]
    },
    {
        name:"Darshan ",
        text: "LEVEL-1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies:[
            {
                name:"Darshan ",
                text: "LEVEL-2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies:[]
            },
            {
                name:"Darshan ",
                text: "LEVEL-2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies:[
                    {
                        name:"Darshan ",
                        text: "LEVEL-3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies:[]
                    },
                    {
                        name:"Darshan ",
                        text: "LEVEL-3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies:[
                            {
                                name:"Darshan ",
                                text: "LEVEL-4 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                replies:[
                                    {
                                        name:"Darshan ",
                                        text: "LEVEL-5 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                        replies:[]
                                    },
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name:"Darshan ",
                text: "LEVEL-2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies:[]
            },
        ]
    },
    {
        name:"Darshan ",
        text: "LEVEL-1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies:[]
    }
    
];


const Comment = ({ data }) => {
    const {name, text, replies} = data ;
  return (
    <div className="flex my-2 ml-2 p-2 rounded-lg shadow-lg bg-gray-800">
        <FaRegCircleUser size={24} />
        <div>
            <p className="ml-2 font-medium">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

const CommentList = ({comments})=>{
    return comments.map((comment, index)=>(
    <div key={index}>
    <Comment  data={comment} />
    <div className=" pl-4 ml-4 border-l border-gray-400">
        <CommentList comments={comment.replies} />
    </div>
    </div>
    ))
}

const CommentContainer =()=>{
    return(
        <div>
            <CommentList comments={commentData} />
        </div>
    )
}

export default CommentContainer ;
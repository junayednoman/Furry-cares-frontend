import FeedFilter from "@/app/modules/feed/FeedFilter";
import BigPostCard from "@/components/ui/BigPostCard";
import FContainer from "@/components/ui/Container";
import { TPost } from "@/types/post.type";
const posts = [
  {
    _id: "64b1a8e7f9a33a1b47b1c101",
    author: {
      coverPhoto: "https://example.com/images/sophia-cover.jpg",
      isVerified: true,
      _id: "64a1f7d8e7a33f1b47b1c003",
      name: "Sophia Moore",
      email: "sophia@example.com",
      password: "hashed_password",
      bio: "Pet lover and cat whisperer.",
      profilePicture:
        "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-10-05T08:30:00Z",
      updatedAt: "2023-10-05T08:30:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "If you're new to the world of cats, these tips will help you care for your furry friend and ensure they feel safe and loved in their new home.",
    thumbnail:
      "https://media.npr.org/assets/img/2023/07/28/gettyimages-174555549_wide-af5baee641ef150b894736a7f836f9f59971349c.jpg?s=1400&c=100&f=jpeg",
    category: "tip",
    tags: ["cats", "pet care", "new owners"],
    isPremium: false,
    votes: 150,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c201",
        post: "64b1a8e7f9a33a1b47b1c101",
        commenter: "John Doe",
        text: "These tips were super helpful, thanks!",
        createdAt: "2024-10-05T12:00:00Z",
        updatedAt: "2024-10-05T12:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-05T10:00:00Z",
    updatedAt: "2024-10-05T10:00:00Z",
    __v: 0,
  },
  {
    _id: "64b1a8e7f9a33a1b47b1c102",
    author: {
      coverPhoto: "https://example.com/images/emma-cover.jpg",
      isVerified: false,
      _id: "64a1f7d8e7a33f1b47b1c001",
      name: "Emma Wilson",
      email: "emma@example.com",
      password: "hashed_password",
      bio: "Dog rescue advocate and story writer.",
      profilePicture:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-09-20T07:15:00Z",
      updatedAt: "2023-09-20T07:15:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "Max was found wandering the streets, scared and alone. This is his inspiring journey from rescue to finding his forever home.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqJBAsZBHxnG0WK7r0wtbG9ioGCjxrFu0Bw&s",
    category: "story",
    tags: ["dog", "rescue", "adoption"],
    isPremium: true,
    votes: 240,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c203",
        post: "64b1a8e7f9a33a1b47b1c102",
        commenter: "Lisa Ray",
        text: "Beautiful story, it brought tears to my eyes!",
        createdAt: "2024-10-04T14:00:00Z",
        updatedAt: "2024-10-04T14:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-04T09:30:00Z",
    updatedAt: "2024-10-04T09:30:00Z",
    __v: 0,
  },
  {
    _id: "64b1a8e7f9a33a1b47b1c103",
    author: {
      coverPhoto: "https://example.com/images/emma-cover.jpg",
      isVerified: false,
      _id: "64a1f7d8e7a33f1b47b1c001",
      name: "Emma Wilson",
      email: "emma@example.com",
      password: "hashed_password",
      bio: "Dog rescue advocate and story writer.",
      profilePicture:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-09-20T07:15:00Z",
      updatedAt: "2023-09-20T07:15:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "Routine vet visits are important to catch early signs of illness in pets. Learn how these check-ups can save your pet's life.",
    thumbnail:
      "https://face4pets.wordpress.com/wp-content/uploads/2019/01/pet-trends.jpg",
    category: "tip",
    tags: ["health", "vet visits", "pet care"],
    isPremium: false,
    votes: 320,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c205",
        post: "64b1a8e7f9a33a1b47b1c103",
        commenter: "Mark Reed",
        text: "Such an informative article. I never realized how important regular check-ups are.",
        createdAt: "2024-10-02T15:00:00Z",
        updatedAt: "2024-10-02T15:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-02T08:15:00Z",
    updatedAt: "2024-10-02T08:15:00Z",
    __v: 0,
  },
  {
    _id: "64b1a8e7f9a33a1b47b1c102",
    author: {
      coverPhoto: "https://example.com/images/emma-cover.jpg",
      isVerified: false,
      _id: "64a1f7d8e7a33f1b47b1c001",
      name: "Emma Wilson",
      email: "emma@example.com",
      password: "hashed_password",
      bio: "Dog rescue advocate and story writer.",
      profilePicture:
        "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
      role: "author",
      followers: [],
      following: [],
      isDeleted: false,
      createdAt: "2023-09-20T07:15:00Z",
      updatedAt: "2023-09-20T07:15:00Z",
      __v: 0,
    },
    title:
      "In publishing and graphic design, Lorem ipsum is a placeholder text",
    content:
      "Max was found wandering the streets, scared and alone. This is his inspiring journey from rescue to finding his forever home.",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqJBAsZBHxnG0WK7r0wtbG9ioGCjxrFu0Bw&s",
    category: "story",
    tags: ["dog", "rescue", "adoption"],
    isPremium: true,
    votes: 240,
    comments: [
      {
        _id: "64a1f7d8e7a33f1b47b1c203",
        post: "64b1a8e7f9a33a1b47b1c102",
        commenter: "Lisa Ray",
        text: "Beautiful story, it brought tears to my eyes!",
        createdAt: "2024-10-04T14:00:00Z",
        updatedAt: "2024-10-04T14:00:00Z",
        __v: 0,
      },
    ],
    isDeleted: false,
    isPublished: true,
    createdAt: "2024-10-04T09:30:00Z",
    updatedAt: "2024-10-04T09:30:00Z",
    __v: 0,
  },
];

const Feed = () => {
  return (
    <div className="md:py-20 py-16">
      <FContainer>
        <div className="md:max-w-[1000px] sm:max-w-[400px] w-full mx-auto">
          <FeedFilter />
          <div className="md:space-y-10 space-y-12 space-y-10 mt-8">
            {posts.map((post: TPost) => (
              <BigPostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </FContainer>
    </div>
  );
};

export default Feed;

// ? lieber Interfaces statt Types bei Schnittstellen verwenden
interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// ? Interfaces lassen sich schöner erweitern, deshalb werden sie lieber verwendet
interface IExtendedPost extends IPost {
  additionalProperty: string;
}

export default IPost;

export interface Media {
  id: number;
  photographerId: number;
  title : string;
  image : string;
  tags : string[];
  likes : number;
  date : Date;
  price : number;
}

// {
//   "id": 342550,
//   "photographerId": 82,
//   "title": "Fashion Yellow Beach",
//   "image": "Fashion_Yellow_Beach.jpg",
//   "tags": [
//     "fashion"
//   ],
//   "likes": 62,
//   "date": "2011-12-08",
//   "price": 55
// }

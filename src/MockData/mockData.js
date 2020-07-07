
const result = {
  data: 
    [{ cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg", 
      price: "350", 
      title: "Harry Potter and the Philosopher's Stone (I)", 
      id: "9781408855652" }, 
      { cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855669.jpg", 
      price: "350",
      title: "Harry Potter and the Chamber of Secrets (II)", 
      id: "9781408855669" }, 
      {
      cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855676.jpg",
      price: "340", 
      title: "Harry Potter and the Prisoner of Azkaban (III)", 
      id: "9781408855676"
    },

    { cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855683.jpg",
    price: "360", 
    title: "Harry Potter and the Goblet of Fire (IV)", 
    id: "9781408855683" }, 
    
    { cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855690.jpg",
     price: "380",
     title: "Harry Potter and the Order of the Phoenix (V)",
      id: "9781408855690" },
     { cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855706.jpg", 
     price: "380", 
    title: "Harry Potter and the Half-Blood Prince (VI)", 
     id: "9781408855706" },
      { cover: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855713.jpg", 
      price: "400",
       title: "Harry Potter and the Deathly Hallows (VII)",
        id: "9781408855713" }

  ],
  status: 200
};
const getBookData = () => {
  return result;
}
module.exports = { getBookData };
import React from "react";
import Card from "./components/Card";

function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://cdn.vectorstock.com/i/1000v/47/20/google-logo-vector-50014720.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651108.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$40/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://crystalpng.com/wp-content/uploads/2025/02/meta_logo.png",
      companyName: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "California, USA",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/500px-Netflix_icon.svg.png?_=20220806170125",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLogo:
        "https://static.vecteezy.com/system/resources/thumbnails/027/127/592/small_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Entry Level",
      pay: "$42/hr",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/960px-Tesla_Motors.svg.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Frontend Engineer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://blog.adobe.com/en/publish/2020/05/28/media_1cc0fcc19cf0e64decbceb3a606707a3ad23f51dd.jpg?width=1200&format=pjpg&optimize=medium",
      companyName: "Adobe",
      datePosted: "1 month ago",
      post: "UI/UX Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "San Jose, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3GyyMW1Lu5C3wtrNBOFIXxyGyElzZxDpnMA&s",
      companyName: "Uber",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://miro.medium.com/1*-_Oy1F9RhlYwtRGSyNEj9w.png",
      companyName: "Airbnb",
      datePosted: "3 weeks ago",
      post: "React Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              post={elem.post}
              datePosted={elem.datePosted}
              logo={elem.brandLogo}
              tag1={elem.tag1}
              tag2={elem.tag2}
              price={elem.pay}
            />
            ;
          </div>
        );
      })}
    </div>
  );
}

export default App;

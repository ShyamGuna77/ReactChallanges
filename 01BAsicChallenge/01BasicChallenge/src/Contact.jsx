import ContactCard from "./ContactCard";

export default function Contact(){
     const contact = [
       {
         name: "Sunita Kumar",
         job: "Electrical Engineer",
         email: "sunita.kumar@acme.co",
       },
       {
         name: "Suresh Kumar",
         job: "Mechanical Engineer",
         email: "Royalmech@acme.co",
       },
       {
         name: "Ashlyn Kintaro",
         job: "Roadside Engineer",
         email: "Onlydevs@gmail.com",
       },
       {
         name: "Ashlyn Kintaro",
         job: "Roadside Engineer",
         email: "Onlydevs@gmail.com",
       },

       {
         name: "Ashlyn Kintaro",
         job: "Roadside Engineer",
         email: "Onlydevs@gmail.com",
       },

       {
         name: "Ashlyn Kintaro",
         job: "Roadside Engineer",
         email: "Onlydevs@gmail.com",
       },
     ];

       return (
         <ul>
           {contact.map((value, index) => (
             <ContactCard key={index} {...value} />
           ))}
         </ul>
       );
}
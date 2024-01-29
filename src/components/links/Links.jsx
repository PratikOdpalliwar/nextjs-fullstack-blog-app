import Link from "next/link";


const Links = () => {
    const links = [
        {
            title :"HomePage",
            path:"/",
        },
        {
            title :"About",
            path:"/about",
        },
        {
            title :"Contact",
            path:"/contact",
        },
        {
            title :"Blog",
            path:"/blog",
        },
    ];

    const session = true;
    const isAdmin= true;
     
    return (
        <div>
          {links.map(link => (
            <Link
            className="p-2 sm:mx-5 focus:bg-white focus:rounded-2xl focus:text-black" 
            href={link.path} 
            key={link.title}>
              {link.title}
              </Link>
          ))}
          {/* {
            session ? (
              {
              isAdmin ? ({title:"Admin", path:"/admin"}) : null
              }) : ({title:"login", path:"/login"})
          } */} 
        </div>
      );
  
}

export default Links





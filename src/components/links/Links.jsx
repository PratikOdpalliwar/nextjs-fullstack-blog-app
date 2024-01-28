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
        </div>
      );
  
}

export default Links





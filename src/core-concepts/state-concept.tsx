// import { useState } from "react";

// type Props = { title: string };

// export default function ProbsConcept({ title }: Props) {
//     const [count, setCount] = useState(0);
//     const handleClick = () => {
//         setCount(count + 1);
//     }
//     return  <>
//             <div>ProbsConcept:{title}</div>
//             <div>Count: {count}</div>
//             <button onClick={handleClick} style={{ backgroundColor: 'red' }}>Increment</button>
//             </>;
// }

// import React, { useState, useEffect } from "react";
// interface User {
//   name: string;
//   city: string;
// }

// function FetchUser() {
//     const [user, setUser] = useState<User | null>(null);
// //   const [user, setUser] = useState  <{name:string,city:string} |null>(null);
//   useEffect(() => {
//     // Simulate API fetch
//     setTimeout(() => {
//       setUser({ name: "Balaji", city: "Chennai" });
//     }, 2000);
//   }, []);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div>
//       <h3>{user.name}</h3>
//       <p>{user.city}</p>
//     </div>
//   );
// }

// export default FetchUser;





// ...existing code...
import React, { useState, useEffect, useRef } from "react";

interface User {
  name: string;
  city: string;
}

function FetchUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const fetchUser = () => {
    setLoading(true);
    setError(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);       //If there was already a timer running, clear it
    }

    // Simulate API fetch
    timerRef.current = window.setTimeout(() => {
      // success path
      setUser({ name: "Balaji", city: "Chennai" });
      setLoading(false);
      timerRef.current = null;
    }, 2000);
  };

  useEffect(() => {
    fetchUser();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>{user?.name}</h3>
      <p>{user?.city}</p>
      <button onClick={fetchUser} style={{ marginTop: 8 }}>
        Refresh
      </button>
    </div>
  );
}

export default FetchUser;

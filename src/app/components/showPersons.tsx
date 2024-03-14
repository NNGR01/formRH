import React, { useEffect, useState } from "react";
import styles from "../page.module.css";

interface Person {
  idperson: number;
  name: string;
  last_name: string;
  rut: string;
}

const ShowPersons: React.FC = () => {
  const [data, setData] = useState<Person[] | null>(null); // Definimos el tipo de estado como Person[] | null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/person", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const jsonData: Person[] = await response.json(); // Definimos el tipo de jsonData como Person[]
        console.log("fetchFunction", jsonData);

        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  console.log(data, "fetch");

  return (
    <div className={styles.showPerson}>
      {data !== null && (
        <div className="container overflow-hidden text-center">
          <div className="row gx-5">
            {data.map((person) => (
              <React.Fragment key={person.idperson}>
                <div className="col-2">
                  <div className="p-3 border">{person.idperson}</div>
                </div>
                <div className="col-3 border">
                  <div className="p-3">{person.name}</div>
                </div>
                <div className="col-3 border">
                  <div className="p-3">{person.last_name}</div>
                </div>
                <div className="col-3 border">
                  <div className="p-3">{person.rut}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPersons;

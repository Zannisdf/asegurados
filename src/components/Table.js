import { useId } from "react";

export function Table({ headers, rows }) {
  const id = useId();

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th scope="col" key={`table-${id}-header-${index}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={`table-${id}-row-${index}`}>
            {row.map((cell, cellIndex) => (
              <td key={`table-${id}-row-${index}-cell-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

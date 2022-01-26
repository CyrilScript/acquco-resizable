import React from "react";

type sortConfigProp = {
  key: any;
  direction: any;
};
const useSortableData = (items: any, config: sortConfigProp): any => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: any) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props: { products: any }) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products, {
    key: "",
    direction: "",
  });
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      <thead>
        <tr>
          <th>
            <button type="button" onClick={() => requestSort("id")} className={getClassNamesFor("id")}>
              ID
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("application")} className={getClassNamesFor("application")}>
              APPLICATION
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("process")} className={getClassNamesFor("process")}>
              PROCESS
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("lastRun")} className={getClassNamesFor("lastRun")}>
              LAST RUN
            </button>
          </th>
          <th>
            <button type="button" onClick={() => requestSort("progress")} className={getClassNamesFor("progress")}>
              PROGRESS
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: { id: number; name: string; progress: number; lastRun: string; application: string; process: string }) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.application}</td>
            <td>{item.process}</td>
            <td>{item.lastRun}</td>
            <td>{item.progress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function SortingTable() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, application: "JBKSHDF", process: "JBKGHDS", progress: 4.9, lastRun: 20 },
          { id: 2, application: "JBKSHDF", process: "JBKGHDS", progress: 1.9, lastRun: 32 },
          { id: 3, application: "JBKSHDF", process: "JBKGHDS", progress: 2.4, lastRun: 12 },
          { id: 4, application: "JBKSHDF", process: "JBKGHDS", progress: 3.9, lastRun: 9 },
          { id: 5, application: "JBKSHDF", process: "JBKGHDS", progress: 0.9, lastRun: 99 },
          { id: 6, application: "JBKSHDF", process: "JBKGHDS", progress: 2.9, lastRun: 86 },
          { id: 7, application: "JBKSHDF", process: "JBKGHDS", progress: 99, lastRun: 12 },
        ]}
      />
    </div>
  );
}

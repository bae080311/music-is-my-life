interface ListProps<T> {
  items: T[];
  name: string;
}

const List = <T,>({ items, name }: ListProps<T>) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {/* {items.map((item, index) => {
            if (name === 'Artist') {
              return <ArtistComponent key={index} item={item} />;
            } else if (name === 'AudioBook') {
              return <AudioBookComponent key={index} item={item} />;
            }
            return <li key={index}>{JSON.stringify(item)}</li>; 
          })} */}
        <li>{JSON.stringify(items)}</li>
      </ul>
    </div>
  );
};

export default List;

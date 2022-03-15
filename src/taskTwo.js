function sum ( a )
{
  let defaultValue = 0;
  switch ( typeof a )
  {
    case 'function':
      return totalValue = a( defaultValue );
    case 'number':
      defaultValue = a + defaultValue;
      return ( () => sum( a ) );
  }
}

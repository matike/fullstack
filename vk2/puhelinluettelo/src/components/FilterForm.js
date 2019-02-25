
import React from 'react'

const FilterForm = (props) => {

return(
<div> rajaa näytettäviä: <input
  value={props.Filter}
  onChange={props.handleFilterChange} />
</div>

)
}

export default FilterForm
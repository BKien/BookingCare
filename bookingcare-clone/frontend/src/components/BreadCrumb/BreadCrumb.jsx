import { useMatch, useMatches ,Link} from 'react-router-dom'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import './BreadCrumb.scss'

const BreadCrumb = ({ BreadCrumbLink }) => {
  const crumbs = useMatches().filter(crumb=>crumb.handle?.breadcrumb)

  return (
    <nav className='breadcrumbs'>
      {crumbs.map((crumb,index)=>( 
        
        <>
           <Link to={crumb.pathname}>{crumb.handle.breadcrumb}</Link>
            {index != crumbs.length - 1 ? (
                <span className='icon'>
                  <FontAwesomeIcon icon={faChevronRight} size="sm" /> 
                </span>
            ) : null}
        </>
      ))}
    </nav>
  )
}

export default BreadCrumb

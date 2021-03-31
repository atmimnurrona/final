import {
    Pagination,
    PaginationItem,
    PaginationLink,
    Alert,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu, DropdownItem
} from "reactstrap";
import {useState} from "react";

export const PaginationButton = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    return (
        <Alert color="primary" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <p style={{alignSelf: 'flex-end'}}>Show</p>
                <ButtonDropdown style={{margin: '0px 10px', height: '80%'}} isOpen={dropdownOpen} toggle={() => {setDropdownOpen(!dropdownOpen)}}>
                    <DropdownToggle caret>{props.size}</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => {props.handleLimit(5)}}>5</DropdownItem>
                        <DropdownItem onClick={() => {props.handleLimit(10)}}>10</DropdownItem>
                        <DropdownItem onClick={() => {props.handleLimit(25)}}>25</DropdownItem>
                        <DropdownItem onClick={() => {props.handleLimit(50)}}>50</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <p style={{alignSelf: 'flex-end'}}>item per Page</p>
            </div>
            <Pagination size="lg" aria-label="page navigation example">
                <PaginationItem>
                    {props.currentPage !== 0 ? <PaginationLink first onClick={() => {
                        props.setPage(0)
                    }}/> : null}
                </PaginationItem>
                <PaginationItem>
                    {((props.currentPage - 2) > 0) ? <PaginationLink style={{marginRight: 5}} onClick={() => {
                        props.setPage(props.currentPage - 2)
                    }}>{props.currentPage - 1}</PaginationLink> : null}
                </PaginationItem>
                <PaginationItem>
                    {(props.currentPage - 1) > 0 ? <PaginationLink style={{marginRight: 5}} onClick={() => {
                        props.setPage(props.currentPage - 1)
                    }}>{props.currentPage}</PaginationLink> : null}
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink
                        style={{marginRight: 5}}>Page {props.currentPage + 1} of {props.totalPage}</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    {(((props.currentPage) < (props.totalPage - 1)) && ((props.currentPage + 1) < (props.totalPage - 1))) ?
                        <PaginationLink style={{marginRight: 5}} onClick={() => {
                            props.setPage(props.currentPage + 1)
                        }}>{props.currentPage + 2}</PaginationLink> : null}
                </PaginationItem>
                <PaginationItem>
                    {(((props.currentPage) < props.totalPage) && ((props.currentPage + 2) < (props.totalPage - 1))) ?
                        <PaginationLink style={{marginRight: 5}} onClick={() => {
                            props.setPage(props.currentPage + 2)
                        }}>{props.currentPage + 3}</PaginationLink> : null}
                </PaginationItem>
                <PaginationItem>
                    {props.currentPage < ((props.totalPage - 1) || 0) ? <PaginationLink last onClick={() => {
                        props.setPage(props.totalPage - 1)
                    }}/> : null}
                </PaginationItem>
            </Pagination>
        </Alert>
    )
}
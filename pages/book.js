import { Calendar, Col, Row, Card } from "antd";

const Book = () => {
  return (
    <>
      <div>book test</div>
      <Row>
        <Col span={22} offset={1}>
          <Calendar />
        </Col>
      </Row>
    </>
  )
}

export default Book;
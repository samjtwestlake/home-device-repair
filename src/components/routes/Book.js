import { Calendar, Col, Row, Card } from "antd";


const Book = () => {
  return (
    <Row>
      <Col span={20} offset={2}>
        <Card>
          <Calendar />
        </Card>
      </Col>
    </Row>
  )
}

export default Book;
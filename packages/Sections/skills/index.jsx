import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "../../Grid";
import VHCardBase from "../../Components/Cards/Base";
import VHText from "../../Components/Text";
import VHSelect from "../../Components/Input/Select";
import VHInputCheckbox from "../../Components/Input/checkbox";


const VHSkillsSection = props => {
  return (
    <>
      <Row marginBottom={5}>
        <VHText
          className={`vh-skills-section-title ${props.className ? props.className : ''}`}
          text={"Skills"}
          color="black-50"
          variant="h2"
        />
      </Row>
      <Row>
        <VHCardBase
          className={`vh-skills-section-card ${props.className ? props.className : ''}`}
        >
            <Row>
                <VHSelect
                  caption="I am..."
                  captionColor={
                    props.controls.position.loading
                    ? "gray-40"
                    : props.controls.position.error
                    ? "red"
                    : null
                  }
                  className={`vh-skills-section-position ${props.className ? props.className : ''}`}
                  currentItem={props.data.position.current}
                  data="position"
                  onEvent={props.onEvent}
                  items={props.positions}
                  isLoading={props.controls.position.loading}
                  description={props.controls.position.error && props.controls.position.message}
                  descriptionColor="red-light"
                />
            </Row>
            <Row marginBottom3>
              <VHInputCheckbox
                checked={props.data.openedPosition}
                className=""
                color={
                  props.controls.openedPosition.loading
                  ? "gray-40"
                  : props.controls.openedPosition.error
                  ? "red"
                  : 'gray-100'
                }
                data={{
                  checked: props.data.openedPosition,
                  id: '1',
                  label: 'yes',
                  value: '123'
                }}
                disabled={props.controls.openedPosition.loading}
                onEvent={props.onEvent}
                title="I am open to working in a different role"
                value="123"
                variant="platform1"
              />
            </Row>
            <Row>
                <VHSelect
                  caption="I would like to work as..."
                  isMulti
                  captionColor={
                    props.controls.workAs.loading
                    ? "gray-40"
                    : props.controls.workAs.error
                    ? "red"
                    : null
                  }
                  className={`vh-skills-section-skills ${props.className ? props.className : ''}`}
                  currentItem={props.data.workAs.current}
                  data="skills"
                  onEvent={props.onEvent}
                  items={props.workAs}
                  isLoading={props.controls.workAs.loading}
                  description={props.controls.workAs.error && props.controls.workAs.message}
                  descriptionColor="red-light"
                />
            </Row>
        </VHCardBase>
      </Row>
    </>
  )
}

VHSkillsSection.propTypes = {
    onEvent: PropTypes.func,
    title: PropTypes.string.isRequired,
    data: PropTypes.object,
    className: PropTypes.string
}

export default VHSkillsSection;

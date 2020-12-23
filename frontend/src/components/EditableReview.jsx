import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"

const EditableReview = ({ review }) => {
    return (
        <>
            <Editable defaultValue={review.content} >
                <EditablePreview />
                <EditableInput />
            </Editable>
        </>
    )
}

export default EditableReview

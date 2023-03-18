import MedInput from "../../components/input/MedInput.jsx";
import MedModal from "../../components/modal/MedModal.jsx";
import {useState} from "react";
import UserImage from "../../components/user-image/UserImage.jsx";
import MedButton from "../../components/button/MedButton";
import "./ChildModal.scss"
import useRequest from "../../hooks/useRequest.js";
function ChildAddModal({isModalOpen, closeButtonCallback, parentId}){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [cnp, setCnp] = useState('');
    const [permanentResidence, setPermanentResidence] = useState('');
    const [currentResidence, setCurrentResidence] = useState('');
    const [secondParentFirstName, setSecondParentFirstName] = useState('');
    const [secondParentLastName, setSecondParentLastName] = useState('');
    const {post} = useRequest();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const body = {
            firstName,
            lastName,
            dateOfBirth,
            gender,
            cnp,
            permanentResidence,
            currentResidence,
            secondParentFirstName,
            secondParentLastName,
            parentId
        }
        const res = await post('/api/child/add', {data: body});
        console.log(res.data)
        closeButtonCallback();
    }

    return (
        <div>
            <MedModal
                isOpen={isModalOpen}
                title={firstName + " " + lastName}
                closeButtonCallback={closeButtonCallback}
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <UserImage src="https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000" alt="Child profile picture"/>
                        <MedInput labelPosition={'float'}
                                  label={'NUMELE'}
                                  size={'large'}
                                  onChange={(e) => setLastName(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'PRENUMELE'}
                                  size={'large'}
                                  onChange={(e) => setFirstName(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'DATA NASTERII'}
                                  size={'large'}
                                  onChange={(e) => setDateOfBirth(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'SEXUL'}
                                  size={'large'}
                                  onChange={(e) => setGender(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'CNP'}
                                  size={'large'}
                                  onChange={(e) => setCnp(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'DOMICILIUL STABIL'}
                                  size={'large'}
                                  onChange={(e) => setPermanentResidence(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'DOMICILIUL ACTUAL'}
                                  size={'large'}
                                  onChange={(e) => setCurrentResidence(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'NUME PARINTE'}
                                  size={'large'}
                                  onChange={(e) => setSecondParentLastName(e.target.value)}
                        />
                        <MedInput labelPosition={'float'}
                                  label={'PRENUME PARINTE'}
                                  size={'large'}
                                  onChange={(e) => setSecondParentFirstName(e.target.value)}
                        />
                    </div>
                    <div className={"update-button"}>
                        <MedButton label={"Add"}
                                   circle={true}
                                   variant={"primary"}
                                   size={"medium"}
                        />
                    </div>
                </form>
            </MedModal>
        </div>
    )
}

export default ChildAddModal;
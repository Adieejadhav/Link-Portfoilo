import { createContext, useContext, useState } from "react";

const FormContext = createContext();


export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({});

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
        {children}
        </FormContext.Provider>
    );
    };


export const useFormData = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormData must be used within a FormProvider");
    }
    return context;
};


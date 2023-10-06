import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import AddressForm from "../../../components/checkout/AddressForm";
import PaymentForm from "../../../components/checkout/PaymentForm";
import Review from "../../../components/checkout/Review";

const steps = ["Shipping address", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const renderStepper = () => (
    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );

  const renderThankYou = () => (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </React.Fragment>
  );

  const renderButtonSection = () => (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      {activeStep !== 0 && (
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
      )}

      <Button
        variant="contained"
        onClick={handleNext}
        sx={{ mt: 3, ml: 1, color: "black" }}
      >
        {activeStep === steps.length - 1 ? "Place order" : "Next"}
      </Button>
    </Box>
  );

  const renderContent = () => {
    if (activeStep === steps.length) {
      return renderThankYou();
    } else {
      return (
        <React.Fragment>
          {getStepContent(activeStep)}
          {renderButtonSection()}
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          {renderStepper()}
          {renderContent()}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
